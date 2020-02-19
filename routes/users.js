const express = require('express')

const models = require('../models')

async function createUser(req, res, next) {
    try {
        const user = await models.User.create(req.body)
        res.status(200).json({
            user
        })
    } catch (error) {
        res.status(404)
        next(error)user
}
async function updateUser(req, res, next) {
    try {
        const user = await models.User.update(req.body, {
            where: {
                id: req.params.userId
            }
        })
        res.status(200).json({
            user
        })

    } catch (error) {
        next(error)
    }
}
async function getUsers(req, res, next) {
    const users = await models.User.findAll({})
    res.status(200).json({
        users
    })
}
async function getUserDetails(req, res, next) {
    const user = await models.User.findOne({
        where: {
            id: req.params.userId
        }
    })
    res.status(400).json({
        user
    })
}
async function deleteUser(req, res, next) {
    try {
        const deletedUser = await models.User.update(
            { 'deleteValue': 1 },
            {
                where: {
                    id: req.params.userId
                }
            }

        )
        res.status(200).json({
            deletedUser
        })
    } catch (error) {
        next(error);

    }

}

async function getdeletedUser(req, res, next) {
    try {
        const deletedUser = await models.User.findAll({
            where: {
                'deleteValue': 1
            }
        })
        res.status(200).json({
            deletedUser
        })
    }
    catch (error) {
        next(error);
    }
}

async function getUserWithRoles(req, res, next) {
    try {
        const users = await models.User.findAll({
            include: [{
                model: models.role,
                required: true,
                where: {
                    id: req.params.userId
                }
            }],
        })
        res.status(200).json({
            users
        })
    }
    catch (error) {
        next(error)
    }
}


async function getUserWithProjects(req, res, next) {
    try {
        const users = await models.User.findAll({
            include: [{
                model: models.Project,
                required: true,
                where: {
                    id: req.params.userId
                }
            }],
        })
        res.status(200).json({
            users
        })
    }
    catch (error) {
        next(error)
    }
}





module.exports = {
    createUser,
    updateUser,
    getUserDetails,
    getUsers,
    deleteUser,
    getUserWithRoles,
    getdeletedUser,
    getUserWithProjects
}

