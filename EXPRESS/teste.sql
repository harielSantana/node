CREATE TABLE usuarios (
  nome VARCHAR(50),
  email varchar(100),
  idade INT
);

INSERT INTO usuarios(nome,email,idade) VALUES(
  "Hariel",
  "email@gmail.com",
  9
);


INSERT INTO usuarios(nome,email,idade) VALUES(
  "Lucas",
  "lucas@gmail.com",
  4
);

INSERT INTO usuarios(nome,email,idade) VALUES(
  "Bia",
  "bia@gmail.com",
  7
);

INSERT INTO usuarios(nome,email,idade) VALUES(
  "Pablo",
  "pablo@gmail.com",
  12
);

SELECT * FROM usuarios WHERE idade = 12;