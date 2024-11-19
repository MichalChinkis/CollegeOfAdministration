import { CORE_CONCEPTS } from "../Pages/data.js"
import CoreConcepts from "./CoreConcept.js"
const showData = (props) => {
    return (
        <ul>
            <CoreConcepts{...CORE_CONCEPTS[0]}
            ></CoreConcepts>
            <CoreConcepts     {...CORE_CONCEPTS[1]}
            ></CoreConcepts>
            <CoreConcepts title={CORE_CONCEPTS[2].title}
                description={CORE_CONCEPTS[2].description}
            ></CoreConcepts>
            <CoreConcepts title={CORE_CONCEPTS[3].title}
            description={CORE_CONCEPTS[3].description}
            ></CoreConcepts>
        </ul>
    )
}

export default showData