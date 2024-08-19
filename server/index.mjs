

// const httpServer = http.createServer(app);

httpServer.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

io.attach(server);
