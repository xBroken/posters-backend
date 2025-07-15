
const events = [];

const createEvent = (req, res) => {
    const { name, date, location } = req.body;
    const id = events.length + 1;
    const event = { id, name, date, location };
    events.push(event);
    res.status(201).json(event);
};

const getEvent = (req, res) => {
    const event = events.find(e => e.id == req.params.id);
    if (!event) return res.status(404).json({ error: 'Evento não encontrado' });
    res.json(event);
};

module.exports = { createEvent, getEvent };
