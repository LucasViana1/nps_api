import { EntityRepository, Repository } from 'typeorm';
import SurveyUser from '../models/SurveyUser';

@EntityRepository(SurveyUser)
class SurveysRepository extends Repository<SurveyUser> {

}

export default SurveysRepository;