// @desc Get all contacts 
// @router GET /api/contacts 
// @access public 

const getContact = (req, res) =>{
    res.status(200).send("get all contacts"); 
}


// @desc create new contact
// @router POST /api/contacts 
// @access public 

const createContact = (req, res) =>{
    res.status(200).json({message: "Create Contact"})
}

// @desc get contact for specific id
// @router GET /api/contacts/:id
// @access public 

const getIndividualContact = (req, res)=>{
    res.status(200).json({message: `Get contact for ${req.params.id}`})
}

// @desc update a specific contact
// @router PUT /api/contacts/:id
// @access public 

const updateContact = (req, res) =>{
    res.status(200).json({message: `update contact for ${req.params.id}`})
}

// @desc delete a specific contact
// @router DELETE /api/contacts/:id
// @access public 

const deleteContact = (req, res) =>{
    res.status(200).json({message: `Delete contact for ${req.params.id}`})
}

module.exports = {getContact, createContact, getIndividualContact, updateContact, deleteContact}