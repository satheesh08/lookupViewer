```md
# 🔗 Lookup Viewer - LWC

A clean and modern Lightning Web Component (LWC) that enables **seamless navigation from a child record to its related parent record** via a lookup field.

This component enhances user experience by providing a contextual link to a related parent record — especially useful when the parent-child relationship is defined using a custom or standard lookup field.

## 📌 Features

- ✅ Displays the parent record's name via a configured lookup
- ✅ Supports navigation to the parent record with a single click
- ✅ Automatically hides itself when no lookup is present
- ✅ Designed with a focus on clean, professional UI/UX
- ✅ Compatible with both standard and custom objects

---

## 🎯 Use Case

While Salesforce provides a **related list** to view children from a parent record, it lacks an intuitive way to **see the parent from the child** in record pages.

This component fills that gap

---

## 🧩 Folder Structure

force-app/
└── main/
    └── default/
        └── lwc/
            └── lookupViewer/
                ├── lookupViewer.html
                ├── lookupViewer.js
                └── lookupViewer.js-meta.xml

---

## ⚙️ How It Works

- Expects a **lookup field** on the current record that points to another SObject.
- Uses `lightning/uiRecordApi` to:
  - Fetch the record ID and resolve the parent lookup reference
  - Retrieve display fields (like `Name`, `FirstName`, `LastName`, etc.)
- If the lookup is populated, it shows the parent’s name with a link.
- If the lookup is empty, it shows a helpful message like:

  > _No related record found._

---

## 🛠 Setup & Deployment

1. Clone this repo or copy the component to your Salesforce project.
2. Deploy using Salesforce CLI:
   ```bash
   sfdx force:source:push
````

3. Drag and drop the component into any **Lightning Record Page** using App Builder.
4. Make sure the lookup field and its target fields are visible via field-level security.

---

## 🧪 Compatibility

* Lightning Record Pages
* Standard & Custom Objects
* Person Accounts / Lookup.

---

## 💡 Customization

To use this for your specific relationship:

* Update the lookup field and child fields in the JavaScript file (`lookupViewer.js`)
* Customize the fields you want to show from the parent record (e.g., Name, Status)

### Want to go one step further?
You can expose the lookup field name as a design attribute (`@api`) so that the component becomes reusable for any lookup field without changing code.
