import {UserProfileResponse} from './UserProfileResponse';
import {IspProfessionsResponse} from './IspProfessionsResponse';

export class IspResponse {
    ispId: number;
    username: string;
    description: string;
    experience: number;
    location: string;
    userProfile: UserProfileResponse;
    portfolioPhotos: string[];
    professions: IspProfessionsResponse[];

}
