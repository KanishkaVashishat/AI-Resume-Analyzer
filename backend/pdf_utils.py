import fitz #this is used to extract text, open,read pdfs and also extract images

def extract_text_from_pdf(file):
    text=""
#this opens the uploaded pdf
    pdf = fitz.open(stream=file.file.read() , filetype = "pdf")

    for page in pdf:
        text+=page.get_text() #extracts text from each pdf

    pdf.close()

    return text