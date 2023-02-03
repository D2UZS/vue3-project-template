/* eslint-disable */
const result = process.versions;

// Это нельзя менять в процессе разработки
const requiredVersions = ["18.13.0"];

if (result && result.node) {
  if (!requiredVersions.includes(result.node)) {
    console.log(
      "\x1b[40m\x1b[31m%s\x1b[0m",
      `\n---------------------------------------------------------------\nУстановка пакетов (npm install) или запуск проекта прерван из-за несоответствия версий Node.js.\nПожалуйста, установите и используйте версию ${requiredVersions}\n---------------------------------------------------------------`
    );
    console.log(
      "\x1b[40m\x1b[33m%s\x1b[0m",
      `---------------------------------------------------------------\nТекущая версия Node.js: ${result.node}\n---------------------------------------------------------------`
    );
    console.log(
      "\x1b[40m\x1b[33m%s\x1b[0m",
      `---------------------------------------------------------------\nДля менеджмента версий можно использовать nvm https://github.com/nvm-sh/nvm\n---------------------------------------------------------------\n`
    );
    process.exit(1);
  }
} else {
  console.log(
    "\x1b[40m\x1b[31m%s\x1b[0m",
    "-------******* Во время проверки версии Node.js что-то пошло не так *******-------"
  );
  process.exit(1);
}
