import role from '../models/role.js';

const admin = async(req, res, next) => {
    const customerRole = await role.findById(req.user.roleId);
    if (!customerRole) return res.status(400).send({message: "Role not found"});

    return customerRole.name === 'customer' ? next() : res.status(400).send({message: "Unauthorized user"});
};

export default admin;