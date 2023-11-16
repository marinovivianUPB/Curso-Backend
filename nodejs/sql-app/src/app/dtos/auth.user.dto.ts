export interface UserAuthDto {
    id: string;
    username: string;
    email: string;
    lastLogin: Date | null;
    token: string | null; 
}