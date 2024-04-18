import {Router, Request, Response} from 'express'
import Session, {ISession} from '../models/Session'

const router = Router();


let sessions: ISession[] = []


router.post('/', async (req: Request, res: Response) => {
    const session = new Session(req.body);
    await session.save();
    res.status(201).send(session);
});

router.get('/', async (req: Request, res: Response) => {
    const sessions = await Session.find();
    res.send(sessions);
});

router.get('/:id', async (req: Request, res: Response) => {
    const session = await Session.findById(req.params.id);
    if (!session) {
    res.status(404).send('Séance non trouvé');
    } else {
    res.send(session);
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const session = await Session.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!session) {
    res.status(404).send('Séance non trouvé');
    } else {
    res.send(session);
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const session = await Session.findByIdAndDelete(req.params.id);
    if (!session) {
    res.status(404).send('Séance non trouvé');
    } else {
    res.status(204).send({message:'Séance supprimé'});
    }
});

export default router