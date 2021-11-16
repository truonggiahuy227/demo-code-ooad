module.exports = (sequelize, Sequelize) => {
    const Document = sequelize.define('document', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        lecturerId: {
            type: Sequelize.INTEGER,
        },
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        type: {
            type: Sequelize.STRING
        },
        path: {
            type: Sequelize.STRING
        },
    }, {
        timestamps: false
    });

    return Document;
}