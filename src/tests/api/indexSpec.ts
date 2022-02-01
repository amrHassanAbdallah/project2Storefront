import app from "../../app";
import supertest from "supertest";
import {equal} from "assert";

const request = supertest.agent(app);
beforeAll(async () => {
    let isSuccess = false
    for (let i = 0; i < 10; i++) {
        const result = await request.get("/health").send()
        if (result.status == 200) {
            isSuccess = true
            break
        }
        sleep((i+1)*100)
    }

    equal(isSuccess,true,"failure service is not ready yet, health is not working.")

});


function sleep(ms:number) {
    return new Promise((resolve => {
        setTimeout(resolve, ms)
    }))
}