import TripData from "./TripData";
import "./TripStyles.css";
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData 
                image={Trip1}
                heading="Trip in Indonesia"
                text="Indonesia, officially the republic of
                Indonesia, is a country in Southeast Asia
                and Oceania between the indian and pacific oceans.
                It consists of over 17,000 islands, including sumatra, java, sulawesi,
                 and parts of Bornea and New Guinea."
                />
                <TripData 
                image={Trip2}
                heading="Trip in Malaysia"
                text="Malaysia is a Southeast Asian Country occupying parts
                of the Malay Peninsula and the island of Borneo.
                It's known for its beaches, rainforests and mix of malay,
                 chinese, Indian and European cultural influence. "
                />
                <TripData 
                image={Trip3}
                heading="Trip in France"
                text="France, in western Europe, encompasses medieval
                cities, alpine villages and mediterranean beaches. Paris, 
                it's capital, is formed for its fashion houses. Classical 
                art museums including the Louvre and monumets like the Effiel Tower."
                />

            </div>
        </div>
    )
}
export default Trip;