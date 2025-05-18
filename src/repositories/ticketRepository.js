const CrudRepository = require("./crudRepository");
const { Ticket } = require('../models');
const { Enums } = require('../utils/common')

class TicketRepository extends CrudRepository {
    constructor() {
        super(Ticket)
    }

    async getPendingTickets() {
        const response = Ticket.findAll({
            where: {
                status: Enums.EMAIL_STATUS.PENDING
            }
        });
        return response;
    }
}

module.exports = TicketRepository;