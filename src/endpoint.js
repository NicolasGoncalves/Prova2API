import { Router } from "express";

const server = Router();

import {semaforo, diaSemana,fatorar,sequenciaPar } from "./services.js"; 

server.get('/semaforo/:cor', (req,resp)=>{
    try {
        const {cor}=req.params;
        let y=semaforo(cor);
        resp.send({
            msg:y
        })
    } catch (err) {
        resp.status(406).send({
            erro:err.message
        })
    }
})
server.get('/diaSemana', (req,resp) => {

    try {
        const { x } = req.query

        const j = diaSemana(x);

        resp.send({ 
            nome: j
        })


    } catch (err) {
        resp.status(406).send({
             error : err.message 
            })
    }

})
server.post('/fatorial', (req,resp) => {

    try {

        const { x } = req.query

        const j = fatorar(x)
        
        resp.send({ fat: j})
    } 
    catch (err) {
        resp.status(406).send({
          erro: err.message  
        })
    }
})

server.post('/sequenciaPar', (req,resp) => {
    try {

        const { limite: { num } } = req.body

        const j = sequenciaPar(num);

        resp.send({ limite : j})
    } 
    
    catch (err) {
        resp.status(406).send({ erro: err.message })
    }
})
export default server;

