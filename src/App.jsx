import { useState, useEffect } from "react";

const HFC_LOGO = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJFYmVuZV8zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1OTUuMjggMTg0LjI1Ij48cmVjdCB3aWR0aD0iNTk1LjI4IiBoZWlnaHQ9IjE4NC4yNSIgZmlsbD0id2hpdGUiLz48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzA1MTY0ZDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTgyLjcxLDEwMy4xOEgxODcuNzFjLS43NywwLTEuMjMtLjYzLTEuMjMtMS40cy40NS0xLjQsMS4yMy0xLjRoMzk0Ljk5Yy43NywwLDEuMjMsLjYzLDEuMjMsMS40cy0uNDYsMS40LTEuMjMsMS40WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTM4OS41OCw2MS44MWMtMzEuNjQsMC00NS4zMywxOS44MS00OC41MiwzMS4yaC0xMC42YzEuODEtNS4zNSw1LjY0LTEyLjc0LDEzLjE1LTEzLjczbDEuMDUtLjE0cy4yNy0xLjI3LC40OC0yYy43MS0yLjQ1LDIuODEtOC4xNyw0LjYyLTEyLjc3bC43NS0xLjkxaC0yNC4wNWMtMTEuOTMsMC0yMC44MiwxMS4zNC0yNC44LDIxLjA1LTEuMTgsMi44Ny0yLjc3LDcuNzQtMy40Myw5LjgxaC03LjA0Yy41My0yLjQ4LDEuMzgtNy4yOSwxLjM4LTEyLjQ3LDAtOC4zNi0zLjY3LTE4LjM2LTIxLjE0LTE4LjQ4LTEyLjE4LS4wNi0xOC41NSw0LjYxLTI0LjM2LDExLjcxLS4yNCwuMjktLjUyLC4zNy0uNzUsLjIxLS4zNy0uMjQtLjc2LTEuNDMsLjI3LTQuNTMsMS4xMy0zLjM4LDExLjE0LTM1LjU3LDExLjE0LTM1LjU3aC00MC43NmwyLjM5LDIuMzljMy4yMSwzLjIxLDEuODIsNi44MSwuNjMsMTAuOTRzLTI4LjA5LDkzLjg2LTI4LjA5LDkzLjg2aDMyLjZzMTEuOTctMzguOTEsMTMuNzItNDQuMDdjMS4xOC0zLjQ3LDQuMzEtMTAuMzEsMTEuNDUtMTAuMzEsMi4yNCwwLDQuMDYsLjg3LDUuNCwyLjU5LDEuNjgsMi4xNSwyLjE2LDUuMSwxLjkxLDYuNjEtLjAxLC4wNy0uMDMsLjE5LC4xMiwuMTloMi41MmMuMTQsMCwuMTctLjA4LC4xOC0uMTYsLjEzLTIuMzUtLjQ4LTUuNzUtMi41MS04LjM2LTEuODctMi40LTQuNS0zLjY3LTcuNi0zLjY3LTcuNzIsMC0xMi43Niw2LjQ2LTE0LjE4LDEyLjQ3LTEuMDEsNC4zLTExLjEzLDM1LjkzLTEzLjA0LDQxLjkxaC0yNi44MWMzLjcyLTEyLjUxLDI1LjkzLTg2LjY5LDI2Ljk5LTkwLjE3czIuNTQtNy41OCwuNDktMTEuNDJoMzAuNzVjLTIuMDIsNy4zMS04LjkzLDI4LjgzLTkuOTUsMzEuODktMS40Miw0LjI1LS4zNSw3LjA5LDEuMzMsOC4wMiwxLjMsLjcyLDIuODYsLjMxLDMuOTYtMS4wNCw1LjQ1LTYuNjcsMTEuMDMtMTAuNzYsMjIuMTgtMTAuNywxMi4xOSwuMDksMTguMzYsNS4zNywxOC4zNiwxNS42OSwwLDYuOTgtMS42OCwxMy40NS0xLjcsMTMuNTJsLS40NiwxLjc1aDEyLjY2bC4zMS0uOThjLjAyLS4wNywyLjIyLTcuMDQsMy42Ny0xMC41NywzLjk0LTkuNjEsMTIuMzQtMTkuMzEsMjIuMjEtMTkuMzFoMTkuOTRjLTEuMjMsMy4xNi0zLjM4LDguODEtNC4xMywxMS40MS05LjMsMS44Mi0xMy40MiwxMS41OC0xNS4wOCwxNy4zNmwtLjUxLDEuNzhoMTYuNTVsLjI1LTEuMDhjMi40Mi0xMC40MiwxNS4xNi0zMC4xMiw0Ni4wNy0zMC4xMiwyMi4zNiwwLDM0LjY3LDguNjYsMzQuNjcsMjQuMzh2NC42MWMtNC40MywuMDMtMTguMTgsLjA5LTIzLjM3LC4wMywuNDktNS40OS0uNzEtMTAuMzEtMy4zOC0xMy4zOS0yLjExLTIuNDQtNS4wNy0zLjcyLTguNTgtMy43Mi0xMC44OCwwLTIwLDE0LjQ4LTIxLjY4LDI0LjYtMS4zOCw4LjMtMS45NSwxOC45OSwyLjc3LDI0LjU3LDEuOTQsMi4yOSw0LjYsMy40Niw3Ljg5LDMuNDYsOC4wMSwwLDE0LjUtNS44NSwxOC44LTE2LjkyaDIyLjVjLTMuMzYsMTQuNzItMjAuMzMsMjkuMzktNDQuMjMsMjkuMzktMTMuMzIsMC0yMy41LTMuNTgtMjkuNDQtMTAuMzQtNC42Ni01LjMxLTYuNTUtMTIuNDUtNS40OC0yMC42N2wuMjEtMS41OGgtMTcuNDFsLTE2LjE1LDYwLjQ2aC0yOC4yOGwxOC4xMi02MC40NmgtMTMuMTJsLTkuNjgsMjkuNTdoLTI2LjQzbDEwLjY5LTM1LjQ3LTIuOTMsLjAyLTExLjUzLDM4LjI0aDMyLjIybDkuNjgtMjkuNTZoNy4zNGwtMTguMTIsNjAuNDZoMzQuMTlsMTYuMTUtNjAuNDZoMTIuMTFjLS43NSw4LjM4LDEuNDIsMTUuNzIsNi4zMiwyMS4zLDYuNDgsNy4zOSwxNy4zOSwxMS4yOSwzMS41NCwxMS4yOSwyNi4yOCwwLDQ0LjY5LTE2Ljk2LDQ3LjMxLTMzLjM3bC4yNi0xLjYyaC0yNy43OGwtLjM0LC45MmMtMi42OSw3LjMtNy43NCwxNi4wMS0xNi41MiwxNi4wMS0yLjQ3LDAtNC4zNS0uODEtNS43Ni0yLjQ3LTQuMjQtNS4wMS0zLjItMTUuOTktMi4xNC0yMi4zLDEuNDUtOC43Miw5Ljc5LTIyLjI2LDE4LjkyLTIyLjI2LDIuNzEsMCw0Ljg4LC45Myw2LjQ3LDIuNzYsMi4zOSwyLjc2LDMuMzIsNy40LDIuNTQsMTIuNzNsLS4yMiwxLjU0LDEuNTYsLjA2YzMuNjksLjE0LDI3Ljc5LDAsMjcuNzksMHYtNy4zOWMwLTEwLjE1LTQuODctMjcuMTctMzcuNDctMjcuMTdaIi8+PGc+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNOTEuNzMsMTEuNzNDNDcuMjgsMTEuNzMsMTEuMzQsNDcuNjcsMTEuMzQsOTIuMTNzMzUuOTQsODAuNCw4MC40LDgwLjQsODAuNC0zNS45NCw4MC40LTgwLjRTMTM2LjE5LDExLjczLDkxLjczLDExLjczWm0wLDE1NS45N2gwYy00MS43MywwLTc1LjU3LTMzLjg1LTc1LjU3LTc1LjU3UzUwLjAxLDE2LjU1LDkxLjczLDE2LjU1czc1LjU3LDMzLjg1LDc1LjU3LDc1LjU3LTMzLjg1LDc1LjU3LTc1LjU3LDc1LjU3WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTEyMi45MSw3Ni4xNGM5LjQ1LDAsMjQuMjYsMS40OCwzMi45NywzLjNsMy40MS0zLjNjLTE0LTIuNjItMjYuMzctMy44NC0zOS4xLTMuODQtNi4yMSwwLTExLjM3LC4yOS0xNi4yMSwuOTItNi40MywxMy44NC0xNi40LDIxLjcyLTI3LjUxLDIxLjcyLTUuMDgsMC0xMC41OC0xLjgtMTcuOC01LjgybC04LjU1LTQuNzgsMS42Mi0xLjI3LDE2LjQ2LDcuMTUsMi4wOS0xLjY3LTMyLjA3LTE0LjY5LTMuMzQsMi42NS05LjgyLTQuMjEsLjEsMy43M2MxNC41Miw2LjQxLDIxLjAzLDEwLjEzLDM5LjYzLDIyLjY4LDE5LjM0LDEzLjEsNDIuMjMsMjIuNjcsNjMuOTksMjYuNzVsNS4yNy01LjFoLTEuNDFjLTE1LjA4LDAtMzAuNjQtNi40NS00MC4xNC0xNi42NCw5Ljk3LTYuMDksMTkuNjEtOC43NSwzMS44NS04Ljc1LDQuNzQsMCwxMC4xMSwuMzIsMTQuNTMsLjg3bDMuMjYtMy4xM2MtNi4yMS0uOTItMTIuNzctMS4zNy0xOS42My0xLjM3LTQuODIsMC04Ljg3LC4xOC0xMi41NiwuNTYsLjUtLjU1LDIuMTQtMi4zMiwyLjc3LTMuMDQsMi43OC0uMTYsNS44OC0uMjYsOC42Mi0uMjYsNy42OCwwLDE2LjI1LC42MywyMy4yNiwxLjcybDMuMjYtMy4xN2MtOS4yMS0xLjQ4LTE3LjctMi4xNS0yNi43OC0yLjE1LTIuNjIsMC00LjUyLC4wMy01LjUsLjEsLjg3LTEuMDUsMS43NC0yLjE3LDIuMTItMi43NSwuMzktLjAyLC43Mi0uMDIsMi4zMy0uMDIsMTEuMDQsMCwxOS43MSwuNzQsMzAuMTQsMi41OWwzLjI2LTMuMTVjLTExLjU2LTIuMDctMjIuMDEtMy4wMi0zMy41Mi0zLjAyLC43NC0xLjE0LDEuMjQtMS45NiwxLjU4LTIuNTcsLjI5LS4wMywuOC0uMDUsMS40MS0uMDVaIi8+PC9nPjxnPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ0My40OSwxMDkuMzJsLTEuNzYsOC4zMWg4Ljc2bDEuNzYtOC4zMWg0Ljc5bC00LjU4LDIxLjY1aC00Ljc5bDEuOTctOS4zNGgtOC43NmwtMS45Nyw5LjM0aC00Ljc2bDQuNTUtMjEuNjVoNC43OVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik00NTkuNjUsMTE3LjU5Yy40Ni0uNjYsMS4wMy0xLjE5LDEuNy0xLjU5LC42Ny0uNCwxLjQyLS42OSwyLjI0LS44NiwuODMtLjE3LDEuNjktLjI2LDIuNTgtLjI2LC43MSwwLDEuNDUsLjA1LDIuMjEsLjE1LC43NywuMSwxLjQ4LC4zLDIuMTIsLjU5LC42NSwuMjksMS4xOCwuNzEsMS41OSwxLjI0LC40MiwuNTQsLjYxLDEuMjUsLjU5LDIuMTQsMCwuNzUtLjExLDEuNjMtLjMzLDIuNjRsLTEuMzksNi4zMWMtLjA4LC4yOC0uMTQsLjYzLS4xNywxLjA1LS4wMywuNDItLjA0LC43Ny0uMDQsMS4wOCwwLC4yNiwuMDUsLjU3LC4xNSwuOTFoLTQuMzF2LTEuNTVjLS41OSwuNjctMS4zLDEuMTYtMi4xNSwxLjQ3LS44NSwuMzEtMS43MywuNDctMi42NCwuNDctLjg1LDAtMS41OS0uMTEtMi4yMy0uMzMtLjY0LS4yMi0xLjE3LS41Mi0xLjU5LS44OS0uNDItLjM3LS43NC0uODEtLjk0LTEuMy0uMi0uNS0uMy0xLjAyLS4zLTEuNTYsMC0xLjUyLC41Mi0yLjczLDEuNTYtMy42NCwxLjA0LS45MSwyLjUxLTEuNDgsNC40MS0xLjcsMS4wMS0uMTIsMS44OS0uMjEsMi42NC0uMjcsLjc1LS4wNiwxLjM3LS4xNiwxLjg2LS4yOXMuODYtLjMyLDEuMTEtLjU4Yy4yNC0uMjUsLjM2LS42MywuMzYtMS4xNCwwLS40LS4wOS0uNzMtLjI3LS45Ny0uMTgtLjI0LS40MS0uNDMtLjY4LS41OC0uMjctLjE0LS41Ny0uMjQtLjg4LS4yOXMtLjYxLS4wOC0uODktLjA4Yy0uNzcsMC0xLjQ2LC4xOS0yLjA2LC41NnMtLjk4LC45Ni0xLjEyLDEuNzRoLTQuMDNjLjE0LS45OSwuNDQtMS44MSwuOTEtMi40N1ptNi40Myw2LjQ2Yy0uNjMsLjA3LTEuMjUsLjEzLTEuODgsLjE3LS40LC4wNC0uOCwuMTEtMS4xOCwuMnMtLjcyLC4yMy0xLjAyLC40MS0uNTMsLjQzLS43MSwuNzQtLjI3LC43MS0uMjcsMS4yYzAsLjU5LC4yNCwxLjAzLC43MSwxLjMyLC40OCwuMjksMS4wMywuNDQsMS42NSwuNDQsLjY3LDAsMS4yMy0uMTEsMS42OC0uMzJzLjg0LS40OSwxLjE1LS44MmMuMzEtLjMzLC41Ni0uNzEsLjc0LTEuMTQsLjE4LS40MiwuMzMtLjg1LC40NS0xLjI3bC40Mi0xLjUyYy0uNTUsLjMyLTEuMTMsLjUyLTEuNzYsLjU5WiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTQ4MS40MywxMTUuM2wtLjQ5LDIuMjFoLjA2Yy42NS0uOTEsMS40My0xLjU4LDIuMzctMiwuOTMtLjQyLDEuOTctLjY0LDMuMTItLjY0LC45NywwLDEuOCwuMjEsMi40OSwuNjQsLjY5LC40MiwxLjEyLDEuMTIsMS4zLDIuMDksLjI2LS40LC42LS43NywxLTEuMTEsLjQtLjMzLC44NC0uNjIsMS4zLS44NiwuNDYtLjI0LC45Ni0uNDMsMS40Ny0uNTYsLjUyLS4xMywxLjAzLS4yLDEuNTMtLjIsLjYxLDAsMS4yLC4wOCwxLjc3LC4yNHMxLjA5LC40LDEuNTMsLjczLC44LC43NCwxLjA2LDEuMjRjLjI2LC41MSwuMzksMS4wOSwuMzksMS43NiwwLC40OS0uMDUsLjk4LS4xNSwxLjQ3LS4xLC41LS4yLC45OC0uMywxLjQ0bC0xLjk0LDkuMjJoLTQuMzFsMi4wNi05LjkyYy4wOC0uNCwuMTItLjc4LC4xMi0xLjEyLDAtLjQ2LS4xOC0uODYtLjUzLTEuMTgtLjM1LS4zMi0uOC0uNDktMS4zNS0uNDlzLTEuMDgsLjE0LTEuNTMsLjQxYy0uNDYsLjI3LS44NSwuNjItMS4xOCwxLjAzLS4zMywuNDEtLjYxLC44OC0uODMsMS4zOHMtLjM4LDEtLjQ4LDEuNDlsLTEuNzYsOC40aC00LjM0bDIuMDYtOS45MmMuMDgtLjQsLjEyLS43OCwuMTItMS4xMiwwLS40Ni0uMTgtLjg2LS41My0xLjE4LS4zNS0uMzItLjgtLjQ5LTEuMzUtLjQ5cy0xLjA4LC4xNC0xLjUzLC40MWMtLjQ2LC4yNy0uODUsLjYyLTEuMTgsMS4wMy0uMzMsLjQxLS42MSwuODgtLjgzLDEuMzhzLS4zOCwxLS40OSwxLjQ5bC0xLjc2LDguNGgtNC4yOGwzLjI1LTE1LjY4aDQuMTJaIi8+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNNTEwLjQyLDEwOS4zMmwtMS42MSw3LjY0aC4wNmMuNjctLjczLDEuMzUtMS4yNiwyLjA1LTEuNTksLjctLjMzLDEuNTYtLjUsMi41OS0uNXMxLjg3LC4xOCwyLjU4LC41MywxLjI5LC44MywxLjc0LDEuNDRjLjQ1LC42MSwuNzksMS4zMSwxLDIuMTIsLjIxLC44MSwuMzIsMS42NywuMzIsMi41OCwwLDEuMjEtLjE3LDIuNDEtLjUyLDMuNTlzLS44NiwyLjIzLTEuNTUsMy4xNWMtLjY5LC45Mi0xLjU0LDEuNjYtMi41NSwyLjIzLTEuMDEsLjU3LTIuMTgsLjg1LTMuNTIsLjg1LTEuMDksMC0yLjA5LS4yLTIuOTktLjYxLS45LS40LTEuNTQtMS4xNS0xLjkzLTIuMjRoLS4wNmwtLjUyLDIuNDZoLTMuOTRsNC41Mi0yMS42NWg0LjMxWm0tLjc5LDkuNDZjLS41OSwuNDQtMS4wNywxLTEuNDQsMS42N3MtLjY1LDEuMzktLjgyLDIuMThjLS4xNywuNzktLjI2LDEuNTMtLjI2LDIuMjEsMCwuOTcsLjI3LDEuNzYsLjgyLDIuMzgsLjU1LC42MiwxLjMxLC45MiwyLjMsLjkyLC44MywwLDEuNTMtLjIxLDIuMTEtLjY0LC41OC0uNDIsMS4wNS0uOTYsMS40Mi0xLjYyLC4zNy0uNjYsLjY1LTEuMzcsLjgyLTIuMTQsLjE3LS43NywuMjYtMS40OSwuMjYtMi4xNSwwLS45OS0uMjMtMS44Mi0uNy0yLjQ5LS40Ni0uNjctMS4yNS0xLTIuMzctMS0uODUsMC0xLjU3LC4yMi0yLjE1LC42N1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MzAuODIsMTMwLjk3bC40OS0yLjE4aC0uMDZjLTEuNCwxLjcyLTMuMjIsMi41OC01LjQ5LDIuNTgtMy4wNSwwLTQuNTgtMS40LTQuNTgtNC4xOCwwLS4xNiwuMDItLjM3LC4wNS0uNjIsLjAzLS4yNSwuMDctLjUxLC4xMi0uNzcsLjA1LS4yNiwuMS0uNTEsLjE1LS43NHMuMS0uNDIsLjE0LS41NmwxLjk0LTkuMTloNC4zMWwtMS45MSw5LjE5Yy0uMDQsLjEyLS4wOCwuMjctLjExLC40NHMtLjA2LC4zNS0uMDksLjUzLS4wNSwuMzYtLjA2LC41M2MtLjAxLC4xNy0uMDEsLjMxLS4wMSwuNDEsMCwuNDcsLjIyLC44NSwuNjUsMS4xNSwuNDMsLjMsLjksLjQ2LDEuNDEsLjQ2LC42NSwwLDEuMjItLjEzLDEuNzEtLjM4cy45Mi0uNTgsMS4yNy0uOTksLjY1LS44NywuODgtMS4zOSwuNDEtMS4wNiwuNTMtMS42MWwxLjc2LTguMzRoNC4zMWwtMy4yNywxNS42OGgtNC4xMloiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01NDYuMTEsMTE1LjNsLS42NCwyLjgyLC4wNiwuMDZjLjQ4LTEuMDksMS4yMi0xLjkyLDIuMi0yLjQ3LC45OC0uNTYsMi4wNS0uODMsMy4yLS44MywuNDUsMCwuODksLjAzLDEuMzMsLjA5bC0uODgsNC4xOGMtLjMtLjA2LS42MS0uMTItLjkxLS4xOC0uMy0uMDYtLjYxLS4wOS0uOTEtLjA5LS44MywwLTEuNTMsLjE0LTIuMTEsLjQycy0xLjA2LC42Ny0xLjQ2LDEuMTVjLS4zOSwuNDgtLjcxLDEuMDQtLjk0LDEuNjUtLjIzLC42Mi0uNDIsMS4yNi0uNTYsMS45M2wtMS40Niw2Ljk0aC00LjI4bDMuMjUtMTUuNjhoNC4wOVoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01NjUuMDcsMTMzLjE5Yy0uNDUsLjg1LTEuMDIsMS41NS0xLjcxLDIuMDlzLTEuNTMsLjk1LTIuNDksMS4yMS0yLjA5LC4zOS0zLjM4LC4zOWMtLjc5LDAtMS41OC0uMDktMi4zOC0uMjctLjgtLjE4LTEuNTItLjQ3LTIuMTUtLjg4cy0xLjE1LS45My0xLjU1LTEuNThjLS4zOS0uNjUtLjU5LTEuNDUtLjU5LTIuNGg0LjI4Yy0uMDIsLjQsLjA1LC43NSwuMjEsMS4wMywuMTYsLjI4LC4zOCwuNTIsLjY1LC43LC4yNywuMTgsLjU4LC4zMSwuOTIsLjM5LC4zNCwuMDgsLjY5LC4xMiwxLjAzLC4xMiwuNjksMCwxLjI2LS4xNCwxLjcxLS40MnMuODQtLjY3LDEuMTctMS4xNWMuMzItLjQ4LC42LTEuMDYsLjgyLTEuNzMsLjIyLS42NywuNDQtMS4zOCwuNjctMi4xMmwtLjA2LS4wNmMtMS4xMSwxLjQ4LTIuNTUsMi4yMS00LjMxLDIuMjEtLjkzLDAtMS43Ny0uMTUtMi41Mi0uNDYtLjc1LS4zLTEuMzgtLjc0LTEuOS0xLjMtLjUyLS41Ny0uOTItMS4yNC0xLjItMi4wMi0uMjgtLjc4LS40Mi0xLjY1LS40Mi0yLjYyLDAtMS4xNSwuMTgtMi4yOSwuNTMtMy40MXMuODctMi4xMywxLjU1LTMuMDNjLjY4LS45LDEuNTEtMS42MywyLjQ5LTIuMTgsLjk4LS41NiwyLjEtLjgzLDMuMzUtLjgzLDEuMDksMCwyLjA1LC4yMSwyLjg4LC42NCwuODMsLjQyLDEuNDYsMS4xNSwxLjkxLDIuMThoLjA2bC40OS0yLjRoNC4xMmwtMy4xMiwxNC44NmMtLjI2LDEuMTctLjYyLDIuMTgtMS4wNiwzLjAzWm0tNi40LTE0LjQ5Yy0uNTUsLjM4LTEsLjg2LTEuMzYsMS40NC0uMzYsLjU4LS42NCwxLjIxLS44MywxLjkxLS4xOSwuNy0uMjksMS4zNi0uMjksMS45OSwwLC40NiwuMDYsLjksLjE3LDEuMzIsLjExLC40MiwuMjksLjc4LC41MywxLjExcy41NSwuNTgsLjkxLC43NmMuMzYsLjE4LC44LC4yNywxLjMsLjI3LC43NywwLDEuNDQtLjE5LDIuMDItLjU2LC41OC0uMzcsMS4wNS0uODUsMS40Mi0xLjQzLC4zNy0uNTgsLjY2LTEuMjIsLjg1LTEuOTJzLjI5LTEuMzksLjI5LTIuMDZjMC0uOTktLjI1LTEuOC0uNzYtMi40NC0uNTEtLjY0LTEuMjgtLjk2LTIuMzMtLjk2LS43MywwLTEuMzYsLjE5LTEuOTEsLjU4WiIvPjwvZz48L3N2Zz4=";

// ── Fragen (correct = 0-basierter Index der richtigen Antwort) ───────────────
const QUESTIONS = [
  {
    id: 1,
    question: "Wenn im Flug aus Versehen der Battery-Master-Schalter ausgeschaltet wird,",
    options: [
      "bleibt der Motor sofort stehen, weil die FADEC nicht mehr von der Batterie versorgt wird.",
      "sind Funk und Transponder stromlos.",
      "passiert erst mal gar nichts, weil der Alternator weiterhin elektrische Energie liefert, Erregung des Alternators über die Notbatterie.",
      "leuchtet sofort die Alternator-Warnung auf.",
    ],
    correct: 2, // "passiert erst mal gar nichts..."
  },
  {
    id: 2,
    question: "Beim Winterbetrieb mit niedrigen Temperaturen,",
    options: [
      "verzichte ich beim Preflight Check auf das Fahren der Klappen um die Batterie zu schonen.",
      "muss ich den Triebwerksstart mit Alternate Air durchführen.",
      "glühe ich durch mehrfaches Schalten des Engine Master Switches mehrfach vor um den Motor vor dem Start gut anzuwärmen.",
      "starte ich nach Möglichkeit das Triebwerk mit externer Spannungsversorgung.",
    ],
    correct: 0, // "verzichte ich beim Preflight Check auf das Fahren der Klappen..."
  },
  {
    id: 3,
    question: "Wann wird der FADEC-Reset durchgeführt?",
    options: [
      "Wenn eine FADEC-Leuchte rot leuchtet.",
      "Wenn die rote Alternator Leuchte blinkt.",
      "Wenn die beiden gelben Caution Leuchten an sind.",
      "Wenn eine oder beide FADEC-Leuchten rot blinken.",
    ],
    correct: 3, // "Wenn eine oder beide FADEC-Leuchten rot blinken."
  },
  {
    id: 4,
    question: "Nach dem Start des Motors: Wie ist das Normalverfahren für das Warmlaufen des Motors?",
    options: [
      "Da der Motor eine Wasserkühlung hat, kann auf das Warmlaufen verzichtet werden.",
      "Triebwerk ca. 2 min mit Load-Hebel in Leerlauf laufen lassen. Dann die Propellerdrehzahl auf 1700 RPM steigern bis eine Öltemperatur von 95°C und eine Kühlmitteltemperatur von 60°C erreicht ist.",
      "Triebwerk ca. 2 min mit Load-Hebel in Leerlauf laufen lassen. Dann kann die Propellerdrehzahl bis auf max. 1400 RPM gesteigert werden (nicht auf dem LH Vorfeld), bis eine Öltemperatur von 50°C und eine Kühlmitteltemperatur von 60°C erreicht ist.",
      "Triebwerk ca. 1 min mit Load-Hebel in Leerlauf laufen lassen. Dann die Propellerdrehzahl auf 1400 RPM steigern bis eine Öltemperatur von 60°C und eine Kühlmitteltemperatur von 50°C erreicht ist.",
    ],
    correct: 2, // "Triebwerk ca. 2 min... 1400 RPM..."
  },
  {
    id: 5,
    question: "Ich kontrolliere die Leistungsabgabe des Alternators durch folgende Maßnahmen:",
    options: [
      "Ich erhöhe die Load auf 20% und schalten den Engine-Master-Schalter aus, dabei darf die Drehzahl nicht einbrechen.",
      "Ich erhöhe die Load, so dass sich 1700 RPM einstellen und schalten den Battery-Master-Schalter für 5 sec aus. Die Volt-Anzeige darf während dieser Zeit nicht einbrechen.",
      "Ich erhöhe die Load auf 20% und schalte Verbraucher zu (z.B. Landeklappen), dann dürfen Volt- und Ammeter nur ganz kurz zucken.",
      "Ich erhöhe die Load, so dass sich 1400 RPM einstellen und schalten den Engine-Master-Schalter aus, dabei darf die Volt-Anzeige nicht einbrechen.",
    ],
    correct: 2, // "Ich erhöhe die Load auf 20% und schalte Verbraucher zu (z.B. Landeklappen)..."
  },
  {
    id: 6,
    question: "Welcher Kraftstoff wird im HFC für den Betrieb der CD-155 Motoren bevorzugt verwendet?",
    options: [
      "AVGAS",
      "Benzin",
      "Auto-Diesel",
      "Jet A-1",
    ],
    correct: 2, // "Auto-Diesel"
  },
  {
    id: 7,
    question: "Was wird als Common Rail bezeichnet?",
    options: [
      "Eine elektronische Steuerungseinheit",
      "Der elektronisch geregelte Hochdruckspeicher des Kraftstoffsystems",
      "Ein mechanisches Kraftstoffventil",
      "Ein mechanisches Einspritzsystem",
    ],
    correct: 1, // "Der elektronisch geregelte Hochdruckspeicher..."
  },
  {
    id: 8,
    question: "Welcher physikalische Parameter trägt maßgeblich zur höheren Effizienz des Dieselmotors bei?",
    options: [
      "Reduzierte Luftkompression",
      "Höheres Verdichtungsverhältnis",
      "Niedrigere Betriebstemperatur",
      "Direkte Zündkerzensteuerung",
    ],
    correct: 1, // "Höheres Verdichtungsverhältnis"
  },
  {
    id: 9,
    question: "Der Umbau des Antriebs vom Benzinmotor zum Dieselmotor ist möglich geworden durch:",
    options: [
      "Die entsprechende EMZ (Ergänzende Muster Zulassung) für C172",
      "Eine LTA (Lufttüchtigkeitsanweisung)",
      "Die FADEC (Full Authority Digital Engine Control) mit ECU A und ECU B",
      "Ein SB (Service Bulletin)",
    ],
    correct: 0, // "Die entsprechende EMZ..."
  },
  {
    id: 10,
    question: "Welches Dieselmotorenmodell ist aktuell in der Cessna 172 des HFC verbaut?",
    options: [
      "CD-155 / Centurion 2.0S",
      "Lycoming O-320",
      "Continental IO-360",
      "Centurion 1.7",
    ],
    correct: 0, // "CD-155 / Centurion 2.0S"
  },
  {
    id: 11,
    question: "Eine oder beide FADEC Leuchten blinken rot. Muss sofort das Notverfahren eingeleitet werden?",
    options: [
      "Ja",
      "Nein, ich drücke den CED/AED Knopf.",
      "Nein, die FADEC-Backup-Batterie versorgt immer den Motor.",
      "Nein, ich drücke den FADEC Testknopf für min. 2 Sekunden.",
    ],
    correct: 3, // "Nein, ich drücke den FADEC Testknopf..."
  },
  {
    id: 12,
    question: "Zur Vermeidung des Trockenfliegens eines Kraftstofftanks bei einer Seitenwindlandung:",
    options: [
      "wird die elektrische Kraftstoffpumpe zugeschaltet.",
      "sorgt in allen möglichen Fluglagen immer der Header- oder Reservoir Tank.",
      "wird im Gegenanflug das Kraftstoffventil auf Stellung BOTH gestellt und die elektrische Kraftstoffpumpe zugeschaltet.",
      "wird im Gegenanflug auf den im Endanflug tieferliegenden Tank (Luv Tank) geschaltet.",
    ],
    correct: 2, // "wird im Gegenanflug das Kraftstoffventil auf Stellung BOTH gestellt..."
  },
  {
    id: 13,
    question: "Wann darf zum Aufwärmen des Kraftstoffs in den Tanks (für den Start bei niedrigen Temperaturen) die Load über die 1400 RPM bis zur Startleistung erhöht werden?",
    options: [
      "Wenn die CHT Anzeige im grünen Bereich ist.",
      "Wenn OP und OT grün sind, aber bitte nicht vor Rollweg U.",
      "Wenn OT und CT grün sind.",
      "Wenn alle Anzeigen am CED und AED grün sind.",
    ],
    correct: 2, // "Wenn OT und CT grün sind..."
  },
  {
    id: 14,
    question: "Nach dem Warmlauf des Motors betätigen Sie den FADEC-Testknopf und es passiert nichts. Was könnte die Ursache sein?",
    options: [
      "Ich habe zuvor nicht den Test/Confirm Knopf gedrückt.",
      "Der Load-Lever steht nicht in der Leerlauf-Position.",
      "Die Tanktemperatur ist zu niedrig.",
      "Die Batterie ist ziemlich leer.",
    ],
    correct: 1, // "Der Load-Lever steht nicht in der Leerlauf-Position."
  },
  {
    id: 15,
    question: "Welchen Beitrag leistet das Zweimassenschwungrad zur Motorstabilität?",
    options: [
      "Reduktion des Treibstoffverbrauchs",
      "Dämpfung von Torsionsschwingungen",
      "Erhöhung der mechanischen Leistung",
      "Verbesserung der Zylinderkompression",
    ],
    correct: 1, // "Dämpfung von Torsionsschwingungen"
  },
  {
    id: 16,
    question: "Welche Drehzahl sollte der Motor beim Takeoff mindestens erreichen?",
    options: [
      "2240 RPM",
      "2400 RPM",
      "2300 RPM",
      "2000 RPM",
    ],
    correct: 0, // "2240 RPM"
  },
  {
    id: 17,
    question: "Wer baute den ersten Dieselmotor?",
    options: [
      "Henry Ford",
      "Rudolf Diesel",
      "Karl Benz",
      "Nikolaus Otto",
    ],
    correct: 1, // "Rudolf Diesel"
  },
  {
    id: 18,
    question: "Bei einem Flug an einem ungewöhnlich heißen Sommertag geht im niedrigen Reiseflug nach ca. 1 Stunde das AED Caution Licht an und die Temperaturanzeige des linken Tanks steht auf gelb (ca. +70 Grad):",
    options: [
      "Im Reiseflug (ruhige Luft) schalte ich auf den rechten Tank und warte ab. Sobald alle Anzeigen wieder grün sind, schalte ich den Tankwahlhebel wieder auf BOTH.",
      "Ich schalte den Motor aus, damit er nicht überhitzt.",
      "Ich mache eine Sicherheitslandung.",
      "Ich führe einen Schiebeflug durch, damit der Rumpf die linke Tankseite abschattet und sich der Tank nicht weiter aufheizt.",
    ],
    correct: 0, // "Im Reiseflug schalte ich auf den rechten Tank..."
  },
  {
    id: 19,
    question: "Wofür steht Load in der Anzeige des Dieselmotors?",
    options: [
      "Die Batteriespannung",
      "Die Restlaufzeit des Motors",
      "Die tatsächlich abgegebene Motorleistung in Prozent",
      "Die aktuelle Propellerstellung",
    ],
    correct: 2, // "Die tatsächlich abgegebene Motorleistung in Prozent"
  },
  {
    id: 20,
    question: "Welche Energiequellen stehen zur Aufrechterhaltung der FADEC-Funktionalität zur Verfügung?",
    options: [
      "Alternator",
      "Alle genannten",
      "FADEC-Notbatterie",
      "Batterie",
    ],
    correct: 1, // "Alle genannten"
  },
  {
    id: 21,
    question: "Welche Mindestdrehzahl ist beim Motorstart vor dem Loslassen des Starters erforderlich?",
    options: [
      "2000 RPM",
      "1400 RPM",
      "1000 RPM",
      "500 RPM",
    ],
    correct: 3, // "500 RPM"
  },
  {
    id: 22,
    question: "Das Problem beim Trockenfliegen eines Tanks",
    options: [
      "entsteht durch den Header- oder Reservoir-Tank. Nach Wiederherstellung der Kraftstoffversorgung lässt sich dieser nicht mehr entlüften.",
      "liegt bei der motorseitigen Kraftstoffpumpe. Durch das Fördern von Luft wird die Hochdruckstufe nicht mehr mit Kraftstoff geschmiert und kann zu einem späteren Zeitpunkt fressen und abscheren.",
      "besteht nicht bei Verwendung von Jet A-1.",
      "entsteht durch die aufwendige Entlüftungsprozedur der Einspritzpumpe und der Common Rail.",
    ],
    correct: 1, // "liegt bei der motorseitigen Kraftstoffpumpe..."
  },
  {
    id: 23,
    question: "Du hast den Motor gestartet und stellst fest, dass der Öldruck nach dem Start unter 2.3 bar (im roten Segment) verbleibt. Wie verhältst du dich?",
    options: [
      "Nach dem Start ist ein geringer Öldruck normal, der Druck korreliert mit der Leistung.",
      "Ich stelle den Motor sofort ab.",
      "Ich beobachte den Öldruck eine Minute. Schwankt er, stelle ich den Motor ab.",
      "Ich beobachte den Öldruck während des Warmlaufens zwei Minuten. Wenn er bis dahin ins grüne Segment steigt, ist alles in Ordnung und ich fahre fort.",
    ],
    correct: 1, // "Ich stelle den Motor sofort ab."
  },
  {
    id: 24,
    question: "Der Alternator fällt aus, was durch die rote VOLTS Anzeige angezeigt wird. Außerdem hat der Gegencheck eine negative Amperemeter-Anzeige ergeben. Was tust du?",
    options: [
      "Ich überprüfe die 3 relevanten Selbstschalter (ALT, ALT FLD, WARN). Kann die Stromversorgung nicht wiederhergestellt werden, schalte ich alle unnötigen Verbraucher aus und fliege zum nächsten geeigneten Flugplatz.",
      "Ich drücke den CED/AED Knopf, um die VOLTS Anzeige zu löschen.",
      "Ich kann mein Flugvorhaben ohne weitere Einschränkungen fortführen, weil die Erreger-Notbatterie einspringt.",
      "Ich ziehe den roten Knopf mit der Beschriftung ALT STATIC AIR PULL ON und kann ganz normal weiterfliegen.",
    ],
    correct: 0, // "Ich überprüfe die 3 relevanten Selbstschalter..."
  },
];

const PASS_THRESHOLD = 0.75;

function getRomanDate() {
  return new Date().toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function generatePDF(name, memberId, score, total, passed) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const W = 297, H = 210;
  const NAVY = [29, 78, 143];

  // Border outer
  doc.setDrawColor(...NAVY);
  doc.setLineWidth(0.8);
  doc.rect(10, 10, W - 20, H - 20);
  // Border inner
  doc.setLineWidth(0.3);
  doc.rect(12.5, 12.5, W - 25, H - 25);
  // Corner decorations
  const corners = [[9,9],[W-9,9],[9,H-9],[W-9,H-9]];
  doc.setLineWidth(0.8);
  corners.forEach(([x,y], i) => {
    const sx = i % 2 === 0 ? 1 : -1;
    const sy = i < 2 ? 1 : -1;
    doc.line(x, y, x + sx*14, y);
    doc.line(x, y, x, y + sy*14);
  });

  const cx = W / 2;
  let y = 46;

  // Logo
  try {
    doc.addImage(window.HFC_LOGO_DATA, "PNG", cx - 45, y, 90, 27, undefined, "FAST");
    y += 42;
  } catch(e) { y += 22; }

  // Title
  doc.setFontSize(passed ? 36 : 28);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 30, 58);
  doc.text(passed ? "Zertifikat" : "Teilnahmebescheinigung", cx, y, { align: "center" });
  y += 16;

  // Subtitle
  doc.setFontSize(13);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(...NAVY);
  doc.text(passed ? "über erfolgreich bestandene Prüfung" : "über Prüfungsteilnahme", cx, y, { align: "center" });
  y += 10;

  // Topic
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(80, 110, 160);
  doc.text("Dieselmotor CD-155 / Centurion 2.0S · Cessna 172 · HFC Hamburg", cx, y, { align: "center" });
  y += 12;

  // "Hiermit wird bestätigt..."
  doc.setFontSize(11);
  doc.setTextColor(30, 45, 65);
  doc.text("Hiermit wird bestätigt, dass", cx, y, { align: "center" });
  y += 12;

  // Name
  doc.setFontSize(26);
  doc.setFont("helvetica", "bolditalic");
  doc.setTextColor(...NAVY);
  doc.text(name, cx, y, { align: "center" });
  const nameWidth = doc.getTextWidth(name);
  doc.setDrawColor(...NAVY);
  doc.setLineWidth(0.4);
  doc.line(cx - nameWidth/2, y+1, cx + nameWidth/2, y+1);
  y += 14;

  // Body text
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(30, 45, 65);
  doc.text(`den Wissenstest zum Dieselmotorbetrieb erfolgreich ${passed ? "bestanden" : "abgelegt"} hat.`, cx, y, { align: "center" });
  y += 12;

  // Score badge
  const pct = Math.round((score / total) * 100);
  const badgeText = `${score} von ${total} Fragen korrekt  ·  ${pct}%`;
  const bw = doc.getTextWidth(badgeText) + 14;
  doc.setFillColor(...NAVY);
  doc.roundedRect(cx - bw/2, y - 5, bw, 8, 2, 2, "F");
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text(badgeText, cx, y, { align: "center" });
  y += 14;

  // Meta
  const dateStr = new Date().toLocaleDateString("de-DE", { day: "2-digit", month: "long", year: "numeric" });
  doc.setFontSize(8);
  doc.setTextColor(80, 110, 160);
  doc.setFont("helvetica", "normal");
  doc.text(`Ausgestellt am ${dateStr}  ·  Mitglied-Nr. ${memberId}  ·  Mindestpunktzahl: 75%`, cx, y, { align: "center" });

  doc.save(`Zertifikat_${name.replace(/\s+/g, "_")}.pdf`);
}

// ── UI ───────────────────────────────────────────────────────────────────────
function ProgressBar({ current, total }) {
  const pct = (current / total) * 100;
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#7c8a99", marginBottom: 6 }}>
        <span>Frage {current} von {total}</span>
        <span>{Math.round(pct)}%</span>
      </div>
      <div style={{ background: "#e8edf2", borderRadius: 99, height: 6, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg,#1d4e8f,#3b82f6)", borderRadius: 99, transition: "width 0.4s cubic-bezier(.4,0,.2,1)" }} />
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("intro");

  useEffect(() => {
    // Load jsPDF
    if (!window.jspdf) {
      const s = document.createElement("script");
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
      document.head.appendChild(s);
    }
    // Convert SVG logo to PNG via canvas
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 600; canvas.height = 186;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 600, 186);
      ctx.drawImage(img, 0, 0, 600, 186);
      window.HFC_LOGO_DATA = canvas.toDataURL("image/png");
    };
    img.src = HFC_LOGO;
  }, []);
  const [name, setName] = useState("");
  const [memberId, setMemberId] = useState("");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [confirmed, setConfirmed] = useState(false);
  const [errors, setErrors] = useState({});

  const q = QUESTIONS[current];
  const score = QUESTIONS.filter((q) => answers[q.id] === q.correct).length;
  const passed = score / QUESTIONS.length >= PASS_THRESHOLD;

  function startQuiz() {
    const e = {};
    if (!name.trim()) e.name = "Bitte gib deinen Namen ein.";
    if (!memberId.trim()) e.memberId = "Bitte gib deine Mitgliedsnummer ein.";
    if (Object.keys(e).length) return setErrors(e);
    setScreen("loading");
    setTimeout(() => setScreen("quiz"), 1000);
  }

  function handleConfirm() {
    if (selected === null) return;
    setAnswers((prev) => ({ ...prev, [q.id]: selected }));
    setConfirmed(true);
  }

  function handleNext() {
    if (current + 1 < QUESTIONS.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setConfirmed(false);
    } else {
      setScreen("result");
    }
  }

  function restart() {
    setScreen("intro");
    setName(""); setMemberId(""); setCurrent(0);
    setAnswers({}); setSelected(null); setConfirmed(false); setErrors({});
  }

  const NAVY = "#1d4e8f";
  const card = { background: "#fff", borderRadius: 20, boxShadow: "0 4px 40px rgba(0,0,0,0.08)", padding: "40px 44px", maxWidth: 660, width: "100%" };
  const inputStyle = (hasErr) => ({ width: "100%", padding: "12px 16px", borderRadius: 10, border: `1.5px solid ${hasErr ? "#ef4444" : "#dde3ea"}`, fontSize: 15, fontFamily: "inherit", outline: "none", background: "#fafbfc" });
  const btnPrimary = { background: `linear-gradient(135deg, ${NAVY} 0%, #3b82f6 100%)`, color: "#fff", border: "none", borderRadius: 10, padding: "14px 32px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" };
  const optionLetters = ["A", "B", "C", "D"];

  // ── INTRO ─────────────────────────────────────────────────────────────────
  if (screen === "intro") return (
    <div style={{ minHeight: "100vh", background: `linear-gradient(135deg, #eef3fb 0%, #dbeafe 100%)`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
      <div style={card}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <div style={{ background: "#fff", borderRadius: 12, padding: "10px 20px", display: "inline-block", marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}><img src={HFC_LOGO} alt="HFC Hamburg Logo" style={{ height: 64, objectFit: "contain", display: "block" }} /></div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>Dieselmotor-Wissenstest</h1>
          <p style={{ color: "#64748b", fontSize: 14 }}>CD-155 / Centurion 2.0S · Cessna 172</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Vollständiger Name</label>
            <input style={inputStyle(errors.name)} placeholder="Max Mustermann" value={name} onChange={(e) => { setName(e.target.value); setErrors((p) => ({ ...p, name: null })); }} />
            {errors.name && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.name}</p>}
          </div>
          <div>
            <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#374151", marginBottom: 6 }}>Mitgliedsnummer</label>
            <input style={inputStyle(errors.memberId)} placeholder="z. B. M-12345" value={memberId} onChange={(e) => { setMemberId(e.target.value); setErrors((p) => ({ ...p, memberId: null })); }} />
            {errors.memberId && <p style={{ color: "#ef4444", fontSize: 12, marginTop: 4 }}>{errors.memberId}</p>}
          </div>
        </div>
        <div style={{ marginTop: 20, padding: "14px 16px", background: "#eff6ff", borderRadius: 10, borderLeft: `3px solid ${NAVY}`, fontSize: 13, color: "#374151", lineHeight: 1.7 }}>
          ✅ <strong>75 % Mindestpunktzahl</strong> zum Bestehen<br />
          🏆 Bei Bestehen erhalten Sie ein <strong>Zertifikat</strong><br />
          📋 <strong>24 Fragen</strong> · Kein Zeitlimit
        </div>
        <button style={{ ...btnPrimary, width: "100%", marginTop: 24 }} onClick={startQuiz}>Test starten →</button>
      </div>
    </div>
  );

  if (screen === "loading") return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#eef3fb 0%,#dbeafe 100%)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: 56, height: 56, border: "4px solid #dbeafe", borderTop: "4px solid #1d4e8f", borderRadius: "50%", margin: "0 auto 20px", animation: "spin 1s linear infinite" }} />
        <style>{"@keyframes spin { to { transform: rotate(360deg); } }"}</style>
        <p style={{ color: "#1d4e8f", fontWeight: 600, fontSize: 16 }}>Quiz wird geladen...</p>
        <p style={{ color: "#94a3b8", fontSize: 13, marginTop: 6 }}>Einen Moment bitte</p>
      </div>
    </div>
  );

  // ── QUIZ ──────────────────────────────────────────────────────────────────
  if (screen === "quiz") return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#eef3fb 0%,#dbeafe 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
      <div style={card}>
        <ProgressBar current={current + 1} total={QUESTIONS.length} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <div style={{ background: "#fff", borderRadius: 8, padding: "4px 10px", display: "inline-block" }}><img src={HFC_LOGO} alt="HFC" style={{ height: 28, objectFit: "contain", display: "block" }} /></div>
        </div>
        <div style={{ background: "#f0f4fb", borderRadius: 12, padding: "18px 20px", marginBottom: 20 }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: NAVY, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>Frage {current + 1}</p>
          <p style={{ fontSize: 16, fontWeight: 600, color: "#0f172a", lineHeight: 1.55 }}>{q.question}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
          {q.options.map((opt, idx) => {
            let bg = "#fafbfc", border = "1.5px solid #dde3ea", color = "#1e293b";
            if (confirmed) {
              if (idx === q.correct) { bg = "#f0fdf4"; border = "2px solid #22c55e"; color = "#166534"; }
              else if (idx === selected && selected !== q.correct) { bg = "#fef2f2"; border = "2px solid #ef4444"; color = "#991b1b"; }
            } else if (selected === idx) { bg = "#eff6ff"; border = `2px solid ${NAVY}`; color = NAVY; }
            const badgeBg = confirmed && idx === q.correct ? "#22c55e" : confirmed && idx === selected && selected !== q.correct ? "#ef4444" : selected === idx && !confirmed ? NAVY : "#e2e8f0";
            const badgeColor = (confirmed && (idx === q.correct || (idx === selected && selected !== q.correct))) || (selected === idx && !confirmed) ? "#fff" : "#64748b";
            return (
              <div key={idx} onClick={() => !confirmed && setSelected(idx)}
                style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px", borderRadius: 10, background: bg, border, color, cursor: confirmed ? "default" : "pointer", transition: "all 0.15s", fontWeight: selected === idx || (confirmed && idx === q.correct) ? 600 : 400 }}>
                <span style={{ width: 28, height: 28, borderRadius: 8, background: badgeBg, color: badgeColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, transition: "all 0.15s" }}>
                  {confirmed && idx === q.correct ? "✓" : confirmed && idx === selected && selected !== q.correct ? "✗" : optionLetters[idx]}
                </span>
                <span style={{ fontSize: 14, lineHeight: 1.5, paddingTop: 4 }}>{opt}</span>
              </div>
            );
          })}
        </div>
        {!confirmed ? (
          <button style={{ ...btnPrimary, width: "100%", opacity: selected === null ? 0.45 : 1, cursor: selected === null ? "not-allowed" : "pointer" }} onClick={handleConfirm} disabled={selected === null}>
            Antwort bestätigen
          </button>
        ) : (
          <div>
            <div style={{ padding: "11px 14px", borderRadius: 10, background: selected === q.correct ? "#f0fdf4" : "#fef2f2", borderLeft: `3px solid ${selected === q.correct ? "#22c55e" : "#ef4444"}`, fontSize: 13, color: selected === q.correct ? "#166534" : "#991b1b", fontWeight: 500, marginBottom: 12 }}>
              {selected === q.correct ? "✅ Richtig! Gut gemacht." : `❌ Falsch. Richtige Antwort: „${q.options[q.correct]}"`}
            </div>
            <button style={{ ...btnPrimary, width: "100%" }} onClick={handleNext}>
              {current + 1 < QUESTIONS.length ? "Nächste Frage →" : "Ergebnis anzeigen"}
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // ── RESULT ────────────────────────────────────────────────────────────────
  if (screen === "result") {
    const pct = Math.round((score / QUESTIONS.length) * 100);
    return (
      <div style={{ minHeight: "100vh", background: passed ? "linear-gradient(135deg,#f0fdf4,#d1fae5)" : "linear-gradient(135deg,#fff1f2,#ffe4e6)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>
        <div style={{ ...card, maxWidth: 680, textAlign: "center" }}>
          <div style={{ fontSize: 60, marginBottom: 12 }}>{passed ? "🏆" : "📚"}</div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: passed ? "#14532d" : "#881337", marginBottom: 6 }}>
            {passed ? "Herzlichen Glückwunsch!" : "Leider nicht bestanden"}
          </h2>
          <p style={{ color: "#64748b", fontSize: 14, marginBottom: 24 }}>{name} · Nr. {memberId}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 24 }}>
            {[
              { label: "Richtig", value: score, color: "#22c55e" },
              { label: "Falsch", value: QUESTIONS.length - score, color: "#ef4444" },
              { label: "Ergebnis", value: `${pct}%`, color: passed ? NAVY : "#f59e0b" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#fff", border: `2px solid ${s.color}25`, borderRadius: 14, padding: "14px 18px", minWidth: 86 }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {passed && (
            <div style={{ marginBottom: 20 }}>
              <p style={{ fontSize: 12, color: "#94a3b8", marginBottom: 8 }}>
                Das Zertifikat wird direkt als PDF-Datei gespeichert.
              </p>
              <button
                style={{ ...btnPrimary, background: "linear-gradient(135deg,#22c55e,#16a34a)", padding: "13px 28px", marginTop: 10, width: "100%" }}
                onClick={() => generatePDF(name, memberId, score, QUESTIONS.length, passed)}
              >
                📄 Zertifikat als PDF speichern
              </button>
            </div>
          )}

          {!passed && (
            <div style={{ padding: "12px 16px", borderRadius: 10, background: "#fff1f2", border: "1.5px solid #fecdd3", fontSize: 13, color: "#881337", marginBottom: 22, lineHeight: 1.6 }}>
              Sie haben {pct}% erreicht. Zum Bestehen sind {Math.round(PASS_THRESHOLD * 100)}% erforderlich.
            </div>
          )}

          <button style={{ background: "#fff", color: "#374151", border: "1.5px solid #dde3ea", borderRadius: 10, padding: "12px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", width: "100%" }} onClick={restart}>
            ↩ Neu starten
          </button>

          <details style={{ marginTop: 24, textAlign: "left" }}>
            <summary style={{ cursor: "pointer", fontSize: 13, color: "#64748b", fontWeight: 600 }}>Antworten überprüfen</summary>
            <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 7 }}>
              {QUESTIONS.map((q, i) => {
                const ok = answers[q.id] === q.correct;
                return (
                  <div key={q.id} style={{ padding: "9px 12px", borderRadius: 8, background: ok ? "#f0fdf4" : "#fef2f2", borderLeft: `3px solid ${ok ? "#22c55e" : "#ef4444"}`, fontSize: 12 }}>
                    <strong style={{ color: "#374151" }}>{i + 1}. {q.question}</strong><br />
                    <span style={{ color: ok ? "#166534" : "#991b1b" }}>{ok ? "✓" : "✗"} {q.options[answers[q.id]]}</span>
                    {!ok && <span style={{ color: "#166534", display: "block" }}>✓ Richtig: {q.options[q.correct]}</span>}
                  </div>
                );
              })}
            </div>
          </details>
        </div>
      </div>
    );
  }
  return null;
}
