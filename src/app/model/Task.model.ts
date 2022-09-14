export interface Task {
  id?: number;
  categoria: String;
  tarefa: String;
  detalhes?: String;
  status: Boolean;
  prazo: Date;
}
