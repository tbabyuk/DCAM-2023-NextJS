"use client"

import { useState } from "react"

import { LEVELS } from "./levelsData"

function RcmWizard() {

  const [technicalRequirements, setTechnicalRequirements] = useState("")
  const [repertoire, setRepertoire] = useState("")
  const [etudes, setEtudes] = useState("")
  const [earTests, setEarTests] = useState("")

  const handleChange = (e) => {
    const targetLevel = e.target.value
    setTechnicalRequirements(LEVELS[targetLevel].technical)
    setRepertoire(LEVELS[targetLevel].repertoire)
    setEtudes(LEVELS[targetLevel].etudes)
    setEarTests(LEVELS[targetLevel].earTests)
  }


  return (
    <div className="flex h-auto">
        <aside className="bg-gray-200 h-fit p-6 w-[350px] min-w-[350px]">
            <h4>Choose RCM Level to view requirements</h4>
                <select name="" id="" className="w-full my-6 h-12 rounded-md text-center cursor-pointer border-2 border-gray-400" onChange={handleChange}>
                    <option value="">Select RCM Level</option>
                    <option value="prepA">Preparatory A</option>
                    <option value="prepB">Preparatory B</option>
                    <option value="lvl1">Level 1</option>
                    <option value="lvl2">Level 2</option>
                    <option value="lvl3">Level 3</option>
                    <option value="lvl4">Level 4</option>
                    <option value="lvl5">Level 5</option>
                    <option value="lvl6">Level 6</option>
                    <option value="lvl7">Level 7</option>
                    <option value="lvl8">Level 8</option>
                    <option value="lvl9">Level 9</option>
                    <option value="lvl10">Level 10</option>
                </select>
                <p className="mb-2 text-sm text-gray-500">Source: <span className="italic">RCM Piano Syllabus, 2022 Edition</span></p>
                <p className="mb-2 text-sm text-gray-500">*This tool is designed as a general guide only. For more detailed information on the different sections of the exam, feel free to consult the RCM Piano Syllabus.</p>
                <p className="mb-2 text-sm text-gray-500">**The wizard currently displays exam information for piano only. Other instruments will be added in the future depending on demand.</p>
        </aside>
        <main className="w-full">
            <h1 className="w-full py-6 text-[1.8rem] text-center">Requirements for:</h1>
            <div className="flex flex-wrap px-8 gap-3">
                <div className="w-[250px] flex-shrink-0">
                    <h4 className="bg-gray-200 text-[1.1rem] py-1 text-center border-b-2 border-gray-400">Technical Requirements</h4>
                    {technicalRequirements && <p dangerouslySetInnerHTML={{__html: technicalRequirements}}></p>}
                </div>
                <div className="w-[250px] flex-shrink-0">
                    <h4 className=" bg-gray-200 text-[1.1rem] py-1 text-center border-b-2 border-gray-400">Repertoire</h4>
                    {repertoire && <p dangerouslySetInnerHTML={{__html: repertoire}}></p>}
                </div>
                <div className="w-[250px] flex-shrink-0">
                    <h4 className="bg-gray-200 text-[1.1rem] py-1 text-center border-b-2 border-gray-400">Etudes</h4>
                    {etudes && <p dangerouslySetInnerHTML={{__html: etudes}}></p>}
                </div>
                <div className="w-[250px] flex-shrink-0">
                    <h4 className="bg-gray-200 text-[1.1rem] py-1 text-center border-b-2 border-gray-400">Sight Reading & Ear Tests</h4>
                    {earTests && <p dangerouslySetInnerHTML={{__html: earTests}}></p>}
                </div>
            </div>
        </main>
    </div>
  )
}

export default RcmWizard