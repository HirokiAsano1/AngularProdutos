import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProdutoService, Product } from '../../service/produto.service';

@Component({
  selector: 'app-produto-detail',
  imports: [CommonModule,RouterLink],
  templateUrl: './produto-detail.component.html',
  styleUrl: './produto-detail.component.css'
})
export class ProdutoDetailComponent implements OnInit {

  product:Product | null = null;
  errorMessage: string | null = null;
  isLoading = true;


    constructor(
    private route: ActivatedRoute,
    private productService: ProdutoService
  ) {}

   ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.isLoading = true; 
    this.productService.getProduct(id).subscribe({
       next: (product) => {
      this.product = product;
      this.isLoading = false;  
    },
     error: (err) => {
      this.errorMessage = err.message;
      this.isLoading = false;  
    }
    });
  }
}
