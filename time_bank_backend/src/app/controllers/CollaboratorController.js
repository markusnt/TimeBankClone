import User from '../models/User';
import File from '../models/File';

class CollaboratorController {
    async index(req, res) {
        const collaborators = await User.findAll({
            where: { admin: false },
            attributes: ['id', 'name', 'email'],
            include: [{
                model: File,
                as: 'avatar',
                attributes: ['name', 'path', 'url']
            }]
        })

        return res.json(collaborators)
    }
}

export default new CollaboratorController();
