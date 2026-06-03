import {AboutService} from './about.service';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class MockAboutService implements AboutService {

  getAbout(): Observable<string[]> {
    const about =
      "Hi, I'm Megha Kaul, an Azure & PSPO certified Product Manager with 9 years of experience leading data platforms, " +
      "analytics, and AI-driven products in enterprise SaaS environments.\n" +
      "I specialize in product strategy, roadmap prioritization, GTM execution, and cross-functional leadership, with a proven " +
      "track record of scaling data platforms, improving adoption, and driving operational excellence using Azure Databricks, " +
      "Kafka, Power BI, AI/ML, and telemetry-driven product development.\n" +
      "At GEP Worldwide, I own the product vision and roadmap for internal and customer-facing data platforms supporting " +
      "$3.7M+ in annual revenue. I launched an AI-powered analytics chatbot that expanded the active user base by 15%, " +
      "and led a multi-tenant analytics platform that drove $1.2M incremental revenue and reduced customer onboarding time by 35%.\n" +
      "I hold certifications in Microsoft Azure Data Fundamentals, PSPO, Agentic AI, RAG, and AI Agents for Product Leaders. " +
      "My technical toolkit includes SQL, Python, LLM/RAG, Azure Databricks, Data Factory, Elastic Search, Kafka, Power BI, " +
      "Tableau, and DevOps/CI/CD pipelines.\n";

    return of(about.split('\n').filter(p => p.length > 0));
  }
}
