import { AuthService } from 'src/app/shared/authentication/auth.service';
import { InvoiceService } from './../../../services/invoice.service';
import { Factura } from 'src/app/core/models/comprobantes/factura';
import { Component, OnInit, Input } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { MatDialogRef } from '@angular/material/dialog';
import { CashierDetailComponent } from 'src/app/pages/cashier/cashier-detail/cashier-detail.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import emailjs from 'emailjs-com';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  @Input()
  public invoice: Factura;
  @Input()
  public orderId: number;
  public subtotal: number;
  public address: string;
  public invoiceColumns: string[] = ['producto', 'precio', 'cantidad', 'total'];
  public uploadPercent: Observable<number>;
  public urlImage: Observable<string>;
  public isLoading = false;

  constructor(
    private dialogRef: MatDialogRef<CashierDetailComponent>,
    private invoiceService: InvoiceService,
    private authService: AuthService,
    private storage: AngularFireStorage,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (this.orderId !== undefined) {
      this.getOrderInvoice();
    } else if (this.invoice !== undefined) {
      this.setValues();
    }
  }

  getOrderInvoice() {
    this.invoiceService.getInvoice(this.orderId).subscribe(res => {
      this.invoice = res;
      this.setValues();
    });
  }

  generateInvoice() {
    this.authService.user.subscribe(user => {
      if (user) {
        this.invoiceService.createInvoice(this.orderId, user.uid).subscribe(res => {
          this.invoice = res;
          this.dialogRef.close({ event: 'Reload' });
        });
      }
    });
  }

  setValues() {
    this.subtotal = this.getSubTotal();
    this.address = this.getAddress();
  }

  getSubTotal() {
    return this.invoice.orden.detalles.reduce((acc, value) => acc += value.precioTotal, 0);
  }

  getAddress() {
    if (this.invoice.orden.delivery) {
      const { calle, numero, localidad } = this.invoice.orden.direccionEntrega;
      return `${calle} ${numero}, ${localidad.nombre}, ${localidad.provincia.nombre}`;
    } else {
      if (this.invoice.orden.cliente.direccionesEnvio[0] === undefined) {
        return '';
      } else {
        const { calle, numero, localidad } = this.invoice.orden.cliente.direccionesEnvio[0];
        return `${calle} ${numero}, ${localidad.nombre}, ${localidad.provincia.nombre}`;
      }
    }
  }

  downloadInvoice() {
    const data = document.getElementById('invoice');
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save(`invoice-${this.invoice.id}.pdf`);
    });
  }

  uploadInvoice() {
    this.isLoading = true;
    const data = document.getElementById('invoice');
    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      const file = pdf.output('blob');
      const filePath = `invoices/invoice-${this.invoice.id}-${Date.now().toString()}.pdf`;
      const ref = this.storage.ref(filePath);
      const task = this.storage.upload(filePath, file);
      this.uploadPercent = task.percentageChanges();
      task.snapshotChanges().pipe(finalize(() => {
        this.urlImage = ref.getDownloadURL();
        this.urlImage.subscribe(url => {
          this.sendEmail(url);
        });
      })).subscribe();
    });
  }

  sendEmail(url) {
    const templateParams = {
      name: `${this.invoice.orden.cliente.nombre}`,
      orderId: `${this.invoice.orden.id}`,
      email: `${this.invoice.orden.cliente.email}`,
      url: `${url}`,
    };
    emailjs.send('gmail', 'template_OgfPccBG', templateParams, 'user_p8QP1aFB0X1MMwAFmuUNu')
      .then((response) => {
        this.isLoading = false;
        this.snackBar.open('Éxito! Se ha enviado el email', 'OK', { duration: 10000, panelClass: ['app-snackbar'] });
      }, (err) => {
        this.isLoading = false;
        this.snackBar.open('Error! No pudimos enviar el email', 'OK', { duration: 10000, panelClass: ['app-snackbar'] });
      });
  }

}
