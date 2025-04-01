import React, { useEffect, useState } from 'react';
import { Spinner, Alert, Table, TableCaption, TableHead, TableBody, TableRow, TableCell, Dialog, Button } from '@cmsgov/design-system'; // Import table and dialog components

const ComplaintList = () => {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedComplaint, setSelectedComplaint] = useState(null); // State for selected complaint
    const [dialogOpen, setDialogOpen] = useState(false); // State for dialog visibility

    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const response = await fetch('/complaints.json');
                const data = await response.json();
                setComplaints(data);
            } catch (err) {
                setError('Error fetching complaints');
            } finally {
                setLoading(false);
            }
        };

        fetchComplaints();
    }, []);

    const handleRowClick = (complaint) => {
        setSelectedComplaint(complaint); // Set the selected complaint
        setDialogOpen(true); // Open the dialog
    };

    const handleCloseDialog = () => {
        setDialogOpen(false); // Close the dialog
        setSelectedComplaint(null); // Clear the selected complaint
    };

    if (loading) return <Spinner label="Loading complaints..." />;
    if (error) return <Alert type="error" message={error} />;

    return (
      <div>
        <h1>Complaint List</h1>
        <Table
          scrollableNotice={
            <Alert className="ds-c-table__scroll-alert" role="status">
              <p className="ds-c-alert__text">
                Scroll using arrow keys to see more
              </p>
            </Alert>
          }
        >
          <TableCaption>List of Complaints</TableCaption>
          <TableHead>
            <TableRow>
              <TableCell key="complaintType" id="complaintType">
                Complaint Type
              </TableCell>
              <TableCell key="complainantName" id="complainantName">
                Complainant Name
              </TableCell>
              <TableCell key="subject" id="subject">
                Subject
              </TableCell>
              <TableCell key="date" id="date">
                Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {complaints.map((complaint) => (
              <TableRow
                key={complaint.id}
                onClick={() => handleRowClick(complaint)}
              >
                {" "}
                {/* Add onClick handler */}
                <TableCell
                  key={`complaintType-${complaint.id}`}
                  headers="complaintType"
                  stackedTitle="Complaint Type"
                >
                  {complaint.complaintType}
                </TableCell>
                <TableCell
                  key={`complainantName-${complaint.id}`}
                  headers="complainantName"
                  stackedTitle="Complainant Name"
                >
                  {`${complaint.complainantDetails.firstName} ${complaint.complainantDetails.lastName}`}
                </TableCell>
                <TableCell
                  key={`subject-${complaint.id}`}
                  headers="subject"
                  stackedTitle="Subject"
                >
                  {complaint.complaintSubject}
                </TableCell>
                <TableCell
                  key={`date-${complaint.id}`}
                  headers="date"
                  stackedTitle="Date"
                >
                  {new Date(
                    complaint.incidentOccurredDate
                  ).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Dialog for displaying complaint details */}
        {dialogOpen && selectedComplaint && (
          <Dialog
            heading="Complaint Details"
            isOpen={dialogOpen}
            onExit={handleCloseDialog}
            title="Complaint Details"
            actions={
              <>
                <Button variation="ghost" onClick={handleCloseDialog}>
                  OK
                </Button>
              </>
            }
          >
            <div>
              <p>
                <strong>Complaint Type:</strong>{" "}
                {selectedComplaint.complaintType}
              </p>
              <p>
                <strong>Complainant Name:</strong>{" "}
                {`${selectedComplaint.complainantDetails.firstName} ${selectedComplaint.complainantDetails.lastName}`}
              </p>
              <p>
                <strong>Subject:</strong> {selectedComplaint.complaintSubject}
              </p>
              <p>
                <strong>Description:</strong> {selectedComplaint.description}
              </p>{" "}
              {/* Assuming description is part of the complaint data */}
              <p>
                <strong>Date:</strong>{" "}
                {new Date(
                  selectedComplaint.incidentOccurredDate
                ).toLocaleDateString()}
              </p>
              {/* Add more fields as necessary */}
            </div>
          </Dialog>
        )}
      </div>
    );
};

export default ComplaintList; 