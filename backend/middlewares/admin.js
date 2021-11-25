import role from '../models/role.js';

const admin = async(req, res, next) => {
    const adminRole = await role.findById(req.user.roleId);
    if (!adminRole) return res.status(400).send({message: "Role not found"});

    console.log(adminRole)
    return adminRole.name === 'admin' ? next() : res.status(400).send({message: "Unauthorized user"});
};

export default admin;