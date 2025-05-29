import { Component, OnInit } from '@angular/core';
import { ProdutoService, Product } from '../../service/produto.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-produto-list',
  imports: [CommonModule,RouterLink,],
  templateUrl: './produto-list.component.html',
  styleUrl: './produto-list.component.css'
})
export class ProdutoListComponent implements OnInit {
  produtos:Product[] = [];
  errorMessage: string | null = null;
  isLoading = true;

  constructor(private produtoService:ProdutoService){}

  ngOnInit(): void {
    this.isLoading = true;
    this.produtoService.getProducts().subscribe({
    next: (produtos) => {
      this.produtos = produtos;
      this.isLoading = false; 
    },
    error: (err) => {
      this.errorMessage = err.message;
      this.isLoading = false; 
    }
  });
  }
}
