const start = () => {
  const username = process.argv[2].replace("--username=", "");
  console.log(`Welcome to the File Manager, ${username}!`);
};

start();
