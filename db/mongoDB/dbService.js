const mongoDbService = (Model) => {
  // for create one as well as create many
  const create = async (req, res) => {
    try {
      const newDocument = new Model(req.body);
      const savedDocument = await newDocument.save();
      res.status(201).json(savedDocument);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // for update one
  const updateOne = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedDocument = await Model.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedDocument);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // for update many
  const updateMany = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedDocument = await Model.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedDocument);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // for delete one
  const deleteOne = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedDocument = await Model.findByIdAndDelete(id);
      res.status(200).json(deletedDocument);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // for delete many
  const deleteMany = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedDocument = await Model.findByIdAndDelete(id);
      res.status(200).json(deletedDocument);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // for find one
  const findOne = async (req, res) => {
    try {
      const { id } = req.params;
      const foundDocument = await Model.findById(id);
      res.status(200).json(foundDocument);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // for find many
  const findMany = async (req, res) => {
    try {
      const foundDocuments = await Model.find();
      res.status(200).json(foundDocuments);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // for count
  const count = async (req, res) => {
    try {
      const countDocuments = await Model.countDocuments();
      res.status(200).json(countDocuments);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // for paginate
  const paginate = async (req, res) => {
    try {
      const { page, limit } = req.query;
      const skip = limit * (page - 1);
      const foundDocuments = await Model.find()
      .skip(skip)
      .limit(limit);
      res.status(200).json(foundDocuments);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  // return all functions



  // for create one as well as create many
  return Object.freeze({
    create,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany,
    findOne,
    findMany,
    count,
    paginate,
  });}

module.exports = mongoDbService;
