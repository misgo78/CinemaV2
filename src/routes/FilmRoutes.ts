import {Router, Request, Response} from 'express'
import Film, {IFilm} from '../models/Film'

const router = Router();


let films: IFilm[] = []


router.post('/', async (req: Request, res: Response) => {
    const film = new Film(req.body);
    await film.save();
    res.status(201).send(film);
});

router.get('/', async (req: Request, res: Response) => {
    const films = await Film.find();
    res.send(films);
});

router.get('/:id', async (req: Request, res: Response) => {
    const film = await Film.findById(req.params.id);
    if (!film) {
    res.status(404).send('Film non trouvé');
    } else {
    res.send(film);
    }
});

router.put('/:id', async (req: Request, res: Response) => {
    const film = await Film.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!film) {
    res.status(404).send('Film non trouvé');
    } else {
    res.send(film);
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    const film = await Film.findByIdAndDelete(req.params.id);
    if (!film) {
    res.status(404).send('Film non trouvé');
    } else {
    res.status(201).send({message:'Film supprimé avec succès'});
    }
});

export default router