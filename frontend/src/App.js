import React, { useState } from "react";
import { Container, TextField, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Alert } from "@mui/material";

const BugReportApp = () => {
    const [bugReports, setBugReports] = useState([
        { id: 1, ubuntuVersion: "20.04", updateVersion: "20.04.1", description: "After installing without trial, the root partition cannot be searched when booting (cannot boot)" },
        { id: 2, ubuntuVersion: "20.04", updateVersion: "20.04.1", description: "After installing the system, the screen will go black when entering the password. You need to go to tty to install the graphics driver and restart the gdm service." },
        { id: 3, ubuntuVersion: "20.04", updateVersion: "20.04.1", description: "After installing updates and restarting the gdm service or restarting, the top status bar will become smaller (to be precise, all the text on the gnome desktop will become smaller)." },
        { id: 4, ubuntuVersion: "20.04", updateVersion: "20.04.1", description: "There are also some small bugs, such as the application list may freeze when closing the folder, and you need to close gnome-session (signal 10)." },
        { id: 5, ubuntuVersion: "20.04", updateVersion: "20.04.1", description: "To be honest, if I still have the image, I would have installed it back long ago." }
    ]);
    const [form, setForm] = useState({ ubuntuVersion: "", updateVersion: "", description: "" });
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.ubuntuVersion || !form.updateVersion || !form.description) return;

        setBugReports([...bugReports, { ...form, id: bugReports.length + 1 }]);
        setForm({ ubuntuVersion: "", updateVersion: "", description: "" });
        setOpenSnackbar(true);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Ubuntu Bug Reporter
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Ubuntu Version" name="ubuntuVersion" value={form.ubuntuVersion} onChange={handleChange} margin="normal" required />
                <TextField fullWidth label="Update Version" name="updateVersion" value={form.updateVersion} onChange={handleChange} margin="normal" required />
                <TextField fullWidth label="Bug Description" name="description" value={form.description} onChange={handleChange} margin="normal" multiline rows={4} required />
                <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                    Submit Bug
                </Button>
            </form>

            <Typography variant="h5" sx={{ mt: 4 }}>
                Reported Bugs
            </Typography>
            <TableContainer component={Paper} sx={{ mt: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Ubuntu Version</TableCell>
                            <TableCell>Update Version</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bugReports.map((bug) => (
                            <TableRow key={bug.id}>
                                <TableCell>{bug.id}</TableCell>
                                <TableCell>{bug.ubuntuVersion}</TableCell>
                                <TableCell>{bug.updateVersion}</TableCell>
                                <TableCell>{bug.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
                <Alert onClose={() => setOpenSnackbar(false)} severity="success">
                    Bug report submitted successfully!
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default BugReportApp;
