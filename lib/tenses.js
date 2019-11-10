import Typography from "@material-ui/core/Typography";

const avaiableTenses = {
  Presente: {
    english: "Present",
    example: (
      <Typography component={"span"}>
        eu <b>como</b> o sanduíche
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
        Eu <b>corria</b> muito naquela rua
      </Typography>
    )
  },
  "Pretérito mais-que-perfeito": {
    english: "Past Perfect",
    example: (
      <Typography component={"span"}>
        Ontem ele <b>destruiu</b> o carro que comprara antes
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
    example: ""
  },
  "Subjuntivo Pretérito Imperfeito": {
    english: "Subjunctive Imperfect Past",
    example: (
      <Typography component={"span"}>
        Quis que ele <b>fosse</b> feliz.
      </Typography>
    )
  },
  "Subjuntivo Futuro": {
    english: "Future Subjunctive",
    example: ""
  },
  "Infinitivo Pessoal": {
    english: "Personal Infinitive",
    example: ""
  },
  "Futuro do Pretérito": {
    english: "Conditional",
    example: (
      <Typography component={"span"}>
        Ele <b>poderia</b> ir com vocês ao cinema.
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
        Não <b>venha</b> agora, por favor.
      </Typography>
    )
  },
  gerúndio: {
    english: "Gerund",
    example: (
      <Typography component={"span"}>
        Gabriela está se <b>exercitando</b> todos os dias.
      </Typography>
    )
  },
  "particípio passado": {
    english: "Past Participle",
    example: (
      <Typography component={"span"}>
        Eles <b>tinham</b> dançado muito na festa.
      </Typography>
    )
  }
};

export default avaiableTenses;
