import React from "react";
import {useEffect, useState} from "react";

function NutritionPage() {
    const [nutrition, setNutrition] = useState;

    useEffect( () => {
        fetch("/nutrition.json")
        .then(r => r.json())
        .then(data => setNutrition(data))
    })
}