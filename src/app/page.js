import React from "react";
import DocxCard from "./component/DocxCard";
import { SearchInput } from "./component/SearchInput";
import { Checkbox } from "@/components/ui/checkbox"
import NavBar from "./component/NavBar";

export default function Home() {
  return (
    <div className="font-[family-name:'Inter'] bg-midnight">
      <NavBar/>

      <main className="flex flex-row">
        <aside className="flex h-lvh w-96 bg-darker p-8">

          <div className="flex flex-col gap-4 m-2">
          <h1 className="text-2xl font-bold">Filter Results</h1>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Program</h2>
              <div className="bg-dusk h-0.5 w-full"></div>

              <ul className="ml-5 flex flex-col gap-2">
                <li>
                <Checkbox id="it-courses"/>
                <label htmlFor="it-courses"> Information Technology</label>
                </li>
                <li>
                <Checkbox id="cs-courses"/>
                <label htmlFor="cs-courses"> Computer Science</label>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Publication Date</h2>
              <div className="bg-dusk h-0.5 w-full"></div>
              <ul className="ml-5 flex flex-col gap-2">
                <li>
                  <Checkbox id="year-2025"/>
                  <label htmlFor="year-2025"> 2025</label>
                </li>
                <li>
                  <Checkbox id="year-2024"/>
                  <label htmlFor="year-2024"> 2024</label>
                </li>
                <li>Custom range...</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <h1 className="font-bold">Subject</h1>
              <div className="bg-dusk h-0.5 w-full"></div>
              <ul className="ml-5 flex flex-col gap-2">
              <li>
                  <Checkbox id="sia-course"/>
                  <label htmlFor="sia-course"> SIA</label>
                </li>
                <li>
                  <Checkbox id="capstone-course"/>
                  <label htmlFor="capstone-course"> Capstone</label>
                </li>  <li>
                  <Checkbox id="research-course"/>
                  <label htmlFor="research-course"> Research Writing</label>
                </li>  <li>
                  <Checkbox id="thesiswriting-course"/>
                  <label htmlFor="thesiswriting-course"> CS Thesis Writing</label>
                </li>
              </ul>
            </div>
          </div>
        </aside>

        <div className="flex flex-col w-full gap-4 bg-midnight p-8">
          <h1 className="text-2xl">Recent Papers</h1>
            <DocxCard></DocxCard>
            
            <DocxCard></DocxCard>

            <DocxCard></DocxCard>

          <div className="flex flex-col justify-between gap-4">
          </div>
        </div>
      </main>

    </div>
  );
}
