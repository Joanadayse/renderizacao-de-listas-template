import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista,setLista]=useState(["comer", "dormir", "dançar"])

  const tarefas= lista.map((tarefa)=>{return (
    <ListaContainer>
    <ul>
      <Tarefa>
        <p>{tarefa}</p>
        <RemoveButton onClick={()=>removeTarefa(tarefa)}>
          <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
    </ul>
  </ListaContainer>
  )
  })


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  // Função para adicionar a nova tarefa digitada ao estado LISTA quando o botão "adicionar for clicado"
  const adicionaTarefa = () => {
    const novaLista=[...lista,novaTarefa]
    setLista(novaLista);
    setNovaTarefa("");
  };

  const removeTarefa = (tarefa) => {
    const tarefasFilter= lista.filter((novaTarefa)=>novaTarefa !== tarefa)
    setLista(tarefasFilter)

  };

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>
     {tarefas}
      
    </ListaTarefasContainer>
  );
}
