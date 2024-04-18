import {Router, Request, Response} from 'express'
import Director, {IDirector} from '../models/Director'

const router = Router();


let directors : IDirector[] = []



router.post('/', async (req: Request, res: Response) => {
    const director = new Director(req.body);
    await director.save();
    res.status(201).send(director);
});

router.get('/', async (req: Request, res: Response) => {
    const directors = await Director.find();
    res.send(directors);
});

router.get('/:id', async (req: Request, res: Response) => {
    const director = await Director.findById(req.params.id);
    if (!director) {
    res.status(404).send('Réalisateur non trouvé');
    } else {
    res.send(director);
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const director = await Director.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!director) {
    res.status(404).send('Réalisateur non trouvé');
    } else {
    res.send(director);
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const director = await Director.findByIdAndDelete(req.params.id);
    if (!director) {
    res.status(404).send('Réalisateur non trouvé');
    } else {
    res.status(204).send({message:"Réalisateur supprimé avec succès"});
    }
});

export default router