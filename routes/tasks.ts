import { Router, Request, Response } from "express";

const task = Router();

task.get('/tasks', (req: Request, res: Response) => {
  res.send('Teste')
})

task.post('/tasks', (req: Request, res: Response) => {
  try {
    const data = req.body;
    console.log(data)
    const { contentTask } = req.body
    console.log(contentTask)
    res.sendStatus(201);
    
  } catch (error) {
    console.error(error)
    res.status(500).send('Erro interno do servidor')
  }
  
})

export default task;