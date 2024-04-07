import { openai } from "../utils/aiGptConstants";
// import { useDispatch } from "react-redux";

export const UseGptAI = (searchText, allMovies) => {


    const fetchList = async (searchText) => {

    const customSearchText = `Act as a movie Recommendation system and suggest 5 movies for the query ${searchText} which is comma seperated like the example result given ahead. Example: Don, Pacific Rim, Godzilla, Migration, Gadar`
  
    const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: customSearchText }],
        model: "gpt-3.5-turbo",
    });

    console.log(completion);
    } 

}
