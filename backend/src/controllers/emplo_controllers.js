const repo = require('../models/emplo_models');

const FindAllEmployees = async (req, res) => {
    try {
        const employees = await repo.getAllEmployees();
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar funcionários' });
    }   
};

const FindEmployeeById = async (req, res) => {      
    try {
        const employee = await repo.getEmployeeById(req.params.id); 
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).json({ error: 'Funcionário não encontrado' });
        }   
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar funcionário' });
    }   
};

const CreateEmployee = async (req, res) => {
    try {
        const result = await repo.createEmployee(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar funcionário' });
    }
};

const UpdateEmployee = async (req, res) => {
    try {
        const result = await repo.updateEmployee(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar funcionário' });
    }
};

const DeleteEmployee = async (req, res) => {
    try {
        await repo.deleteEmployee(req.params.id);
        res.json({ message: 'Funcionário excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir funcionário' });
    }
};

module.exports = {
    FindAllEmployees,
    FindEmployeeById,
    CreateEmployee,
    UpdateEmployee,
    DeleteEmployee
}