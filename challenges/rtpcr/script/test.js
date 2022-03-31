var down = document.getElementById("GFG_DOWN");

        var br = document.createElement("br");
        function GFG_Fun() {

            // submit
            var form = document.createElement("form");
            form.setAttribute("method", "post");
            form.setAttribute("action", "submit.php");

            // person name
            var PN = document.createElement("input");
            PN.setAttribute("type", "text");
            PN.setAttribute("name", "FullName");
            PN.setAttribute("placeholder", "Full Name");

            // aadhar no
            var AN = document.createElement("input");
            AN.setAttribute("type", "text");
            AN.setAttribute("name", "Adhar no");
            AN.setAttribute("placeholder", "Adhar no");

            //  DOB
            var DOB = document.createElement("input");
            DOB.setAttribute("type", "text");
            DOB.setAttribute("name", "DOB");
            DOB.setAttribute("placeholder", "DOB");

            //  city
            var C = document.createElement("input");
            C.setAttribute("type", "City");
            C.setAttribute("name", "City");
            C.setAttribute("placeholder", "City");

            // date of test
            var DOT = document.createElement("input");
            DOT.setAttribute("type", "Date of Test");
            DOT.setAttribute("name", "Date of Test");
            DOT.setAttribute("placeholder", "Date of Test");

            //time of test
            var TOT = document.createElement("input");
            TOT.setAttribute("type", "Time of Test");
            TOT.setAttribute("name", "Time of Test");
            TOT.setAttribute("placeholder", "Time of Test");
            
            // result
            var RST = document.createElement("input");
            RST.setAttribute("type", "Result");
            RST.setAttribute("name", "Result");
            RST.setAttribute("placeholder", "Result");

            // lab name
            var LN = document.createElement("input");
            LN.setAttribute("type", "Lab Name");
            LN.setAttribute("name", "Lab Name");
            LN.setAttribute("placeholder", "Lab Name");
            
            
            // report number
            var RN = document.createElement("input");
            RN.setAttribute("type", "Report Number");
            RN.setAttribute("name", "Report Number");
            RN.setAttribute("placeholder", "Report Number");
            
              // gender
              var Gender = document.createElement("input");
            Gender.setAttribute("type", "Gender");
              Gender.setAttribute("name", "Gender");
              Gender.setAttribute("placeholder", "Gender");
              

            //  submit button
            var s = document.createElement("input");
            s.setAttribute("type", "submit");
            s.setAttribute("value", "Submit");

            // person name
            form.appendChild(PN);
            form.appendChild(br.cloneNode());

            // Aadhar no
             form.appendChild(AN);
            form.appendChild(br.cloneNode());
            

            //  DOB 
            form.appendChild(DOB);
            form.appendChild(br.cloneNode());

           //city
            form.appendChild(C);
            form.appendChild(br.cloneNode());


            // date of test
            form.appendChild(DOT);
            form.appendChild(br.cloneNode());

            //time of test
            form.appendChild(TOT);
            form.appendChild(br.cloneNode());

            //result
            form.appendChild(RST);
            form.appendChild(br.cloneNode());

            //lab name
            form.appendChild(LN);
            form.appendChild(br.cloneNode());

            //report no
            form.appendChild(RN);
            form.appendChild(br.cloneNode());

            //gender
            form.appendChild(Gender);
            form.appendChild(br.cloneNode());


            // Append the submit button to the form
            form.appendChild(s);

            document.getElementsByTagName("body")[0]
                .appendChild(form);
        }