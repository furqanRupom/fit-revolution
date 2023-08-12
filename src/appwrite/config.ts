import {conf} from '@/conf/conf'
import {Client,Account,ID} from 'appwrite'


type CreateUserAccount  = {
    name:string,
    email:string,
    password:string,
}


type LoginUserAccount = {
    email:string,
    password:string
}



const appWriteClient = new Client();
const {appWriteUrl,appWriteProjectId} = conf

// connect to app write with appWriteClient variable;
appWriteClient.setEndpoint(appWriteUrl).setProject(appWriteProjectId);


// create new account;

export const account = new Account(appWriteClient);
console.log(account);




export class AppWriteService{
    // create a new record of user inside appwrite
        
     createUserAccount = async ({ name, email, password }: CreateUserAccount) => {
        try {

            // create new account
          const userAccount = await account.create(ID.unique(),name, email,password);

            // if user logged in

            if(userAccount) return this.login({email,password});
            else return userAccount;

        } catch (error:any) {
            throw new Error(error.message);
        }
    };



    // login

    login = async({email,password}:LoginUserAccount) =>{
        try {
           return await account.createEmailSession(email,password)
        } catch (error:any) {
            throw new Error(error.message);
        }
    }


    // a user logged in or not . Its just checking

    loggedIn = async():Promise<boolean> =>{
        try {
            const data = await this.getCurrentUser();
            return Boolean(data);
        } catch (error:any) {
            throw new Error(error.message)
        }

    }


    // get the current user

    getCurrentUser = async() =>{
        try {
           return await account.get();
        } catch (error:any) {
            console.log("something went wrong",error.message);
            console.log(error);
        }
    }

    // logout
    logOut = async() =>{
        try {
            return await account.deleteSession("current");
        } catch (error:any) {
            console.log("something went wrong",error.message)
        }
    }

};


const appwriteService = new AppWriteService();

export default appwriteService;