import stages from '../db/stages.json';

class Stage {
  findAll() {
    return stages;
  }

  findById({stageId}) {
    return stages
      .find(stage => stage.id === stageId)
  }
}

export default new Stage();