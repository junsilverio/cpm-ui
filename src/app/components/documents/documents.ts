import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data';
import { Document } from '../../models/project.model';

@Component({
  selector: 'app-documents',
  imports: [CommonModule],
  templateUrl: './documents.html',
  styleUrl: './documents.scss',
})
export class Documents implements OnInit {
  documents: Document[] = [];
  totalDocuments: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.documents = this.dataService.getDocuments();
    this.totalDocuments = this.documents.reduce((sum, doc) => sum + doc.count, 0);
  }

  getIconForType(type: string): string {
    const icons: Record<string, string> = {
      'drawings': 'drafting-compass',
      'reports': 'file-alt',
      'contracts': 'file-contract',
      'photos': 'images'
    };
    return icons[type] || 'file';
  }
}
