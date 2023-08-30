import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClientSeanQuizRoutingModule } from "./client-sean-quiz-routing.module";
import { ClientSeanQuizComponent } from "./layout/client-sean-quiz.component";

@NgModule({
	declarations: [ClientSeanQuizComponent],
	imports: [CommonModule, ClientSeanQuizRoutingModule],
})
export class ClientSeanQuizModule {}
