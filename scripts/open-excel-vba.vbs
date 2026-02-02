' VBScript to open Excel file and VBA Editor
' Double-click this file to open Excel with VBA Editor

Set objExcel = CreateObject("Excel.Application")
objExcel.Visible = True
objExcel.DisplayAlerts = False

' Open the Excel file
Set objWorkbook = objExcel.Workbooks.Open("D:\specsheet-system\Final Vehicle Model Wise Specifications -01.xlsx")

' Open VBA Editor
objExcel.VBE.MainWindow.Visible = True

' Wait a moment for VBA Editor to open
WScript.Sleep 1000

' Focus on VBA Editor
objExcel.VBE.MainWindow.SetFocus

MsgBox "Excel file opened and VBA Editor is ready!" & vbCrLf & vbCrLf & _
       "Next steps:" & vbCrLf & _
       "1. In VBA Editor, go to Insert > Module" & vbCrLf & _
       "2. Copy code from scripts\EXTRACT_IMAGES_VBA.txt" & vbCrLf & _
       "3. Paste into the module" & vbCrLf & _
       "4. Press F5 to run the macro", vbInformation, "VBA Editor Ready"

