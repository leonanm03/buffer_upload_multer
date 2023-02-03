## O que muda no front-end pra fazermos upload de arquivos?

Para fazer upload de arquivos no front-end, podemos criar um input do tipo "file" para que o usuário possa colocar o arquivo desejado. Em seguida, o arquivo é enviado para o back-end, para ser armazenado ou processado. na pasta "front" deste repositório há um exemplo simples de como isso poderia ser feito.

## O que muda no back-end pra recebermos e armazenarmos esses arquivos?

No back-end, é necessário escrever o código para receber os arquivos enviados pelo fron-end, para que eles sejam processados e armazenados em algum lugar(um banco de dados, ou sistema de arquivos).
Passos que podem ser seguidos pra configurar o recebimento de arquivos no back-end:


1- Instalar o multer para lidar com o upload de arquivos (npm install multer)

2- Configurar a rota que irá receber o upload

3- processar o arquivo

4- Armazenar o arquivo

 na pasta "back" deste repositório há um exemplo de código que recebe o upload de arquivo.
 
 
 ## Como a biblioteca multer ajuda a prepararmos nosso back-end?
 
 A biblioteca multer é uma biblioteca de middleware do Express.js que ajuda a lidar com o upload de arquivos em seu back-end. Ela permite que você trate a requisição HTTP enviada com o arquivo como uma propriedade do objeto req do Express.js, tornando o processo de manipulação de arquivos mais fácil e conveniente.

Com a biblioteca multer, você pode fazer coisas como:

Definir o tipo de arquivos que você quer aceitar (por exemplo, somente imagens)
Definir o tamanho máximo do arquivo
Escolher onde armazenar o arquivo (por exemplo, na memória ou em um caminho de arquivo específico no disco)
Configurar um nome personalizado para o arquivo quando ele é salvo no servidor
Validar o conteúdo do arquivo antes de salvar (por exemplo, verificar se o arquivo é uma imagem válida)


Em resumo, a biblioteca multer ajuda a preparar seu back-end para o upload de arquivos, tornando o processo de manipulação de arquivos mais fácil e garantindo que o arquivo seja processado de maneira segura e eficiente.


## É uma boa prática armazenarmos os arquivos upados na própria máquina do servidor? Por quê?

Não, pois armazenar os arquivos na máquina no servidor pode ter algumas consequências, como:

1- Limitação de espaço de armazenamento: Armazenar grandes quantidades de arquivos no disco rígido do servidor pode rapidamente esgotar o espaço de armazenamento disponível.


2- Problemas de performance: Armazenar muitos arquivos em uma única máquina pode afetar negativamente o desempenho do servidor, especialmente se houver uma grande quantidade de solicitações de download de arquivos.


3- Fraqueza da segurança: Armazenar arquivos sensíveis na máquina do servidor pode ser arriscado, já que, em caso de invasão ou falha na segurança, esses arquivos podem ser comprometidos.


Por esses motivos, é recomendável armazenar arquivos em serviços de armazenamento em nuvem, como o Amazon S3.



## O que é Amazon S3? Que papel ele pode cumprir nesse cenário de upload de arquivos?


Amazon S3 (Simple Storage Service) é um serviço de armazenamento em nuvem da Amazon Web Services (AWS). Ele permite que os usuários armazenem e recuperem dados a partir de qualquer lugar na Internet.


No contexto de upload de arquivos, o Amazon S3 pode desempenhar o papel de um repositório de armazenamento seguro para arquivos enviados pelos usuários. Ao invés de armazenar arquivos na máquina do servidor, o back-end pode enviá-los diretamente para o Amazon S3, que se encarrega de garantir sua disponibilidade e segurança. Além disso, o Amazon S3 oferece recursos de gerenciamento de arquivos, como a capacidade de recuperar ou excluir arquivos, o que pode ser útil em caso de erros ou incidentes.


Em resumo, usar o Amazon S3 como uma solução de armazenamento para arquivos carregados pode melhorar a escalabilidade, a disponibilidade e a segurança do seu aplicativo.


## Que outras alternativas existem ao Amazon S3?

Google Cloud Storage: É um serviço de armazenamento em nuvem oferecido pelo Google Cloud Platform.


Microsoft Azure Blob Storage: É um serviço de armazenamento de objetos oferecido pelo Microsoft Azure.


DigitalOcean Spaces: É um serviço de armazenamento em nuvem oferecido pelo DigitalOcean.


Backblaze B2: É um serviço de armazenamento em nuvem oferecido pela Backblaze.


IBM Cloud Object Storage: É um serviço de armazenamento de objetos em nuvem oferecido pela IBM.


