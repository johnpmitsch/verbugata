import Typography from "@material-ui/core/Typography";

const avaiableTenses = {
  Presente: {
    english: "Present",
    example: (
      <Typography component={"span"}>
        Eu <b>como</b> um sanduíche
      </Typography>
    )
  },
  "Pretérito Perfeito": {
    english: "Simple Past",
    example: (
      <Typography component={"span"}>
        Eu <b>fiz</b> o meu trabalho
      </Typography>
    )
  },
  "Pretérito Imperfeito": {
    english: "Past Imperfect",
    example: (
      <Typography component={"span"}>
        Eu <b>mantinha</b> meu carro limpo
      </Typography>
    )
  },
  "Pretérito mais-que-perfeito": {
    english: "Past Perfect",
    example: (
      <Typography component={"span"}>
        Eles <b>foram</b> para os Estados Unidos
      </Typography>
    )
  },
  "Futuro do Presente": {
    english: "Simple Future",
    example: (
      <Typography component={"span"}>
        Eles <b>chegarão</b> ao Rio daqui a dois dias
      </Typography>
    )
  },
  "Subjuntivo Presente": {
    english: "Present Subjunctive",
    example: (
      <Typography component={"span"}>
        Ele deseja que eu <b>seja</b> feliz
      </Typography>
    )
  },
  "Subjuntivo Pretérito Imperfeito": {
    english: "Imperfect Past Subjunctive",
    example: (
      <Typography component={"span"}>
        Quis que ele <b>fosse</b> feliz
      </Typography>
    )
  },
  "Subjuntivo Futuro": {
    // change to futuro do subjuntivo
    english: "Future Subjunctive",
    example: (
      <Typography component={"span"}>
        Nós <b>soubermos</b> que ele será demitido
      </Typography>
    )
  },
  "Infinitivo Pessoal": {
    english: "Personal Infinitive",
    example: (
      <Typography component={"span"}>
        Para <b>ter</b> o carro, precisa de dinheiro
      </Typography>
    )
  },
  "Futuro do Pretérito": {
    english: "Conditional",
    example: (
      <Typography component={"span"}>
        Ele <b>poderia</b> ir com vocês ao cinema
      </Typography>
    )
  },
  "Imperativo Afirmativo": {
    english: "Affirmative Imperative",
    example: (
      <Typography component={"span"}>
        <b>Façam</b> silêncio, por favor!
      </Typography>
    )
  },
  "Imperativo Negativo": {
    english: "Negative Imperative",
    example: (
      <Typography component={"span"}>
        Não <b>venha</b> agora, por favor
      </Typography>
    )
  },
  Gerúndio: {
    english: "Gerund",
    example: (
      <Typography component={"span"}>
        João está <b>aprendendo</b> português
      </Typography>
    )
  },
  "Particípio Passado": {
    english: "Past Participle",
    example: (
      <Typography component={"span"}>
        Eles <b>tinham</b> dançado muito na festa
      </Typography>
    )
  }
};

export default avaiableTenses;
