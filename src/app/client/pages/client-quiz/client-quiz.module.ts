import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClientQuizRoutingModule } from "./client-quiz-routing.module";
import { ClientQuizComponent } from "./layout/client-quiz.component";

@NgModule({
	declarations: [ClientQuizComponent],
	imports: [CommonModule, ClientQuizRoutingModule],
})
export class ClientQuizModule {}
