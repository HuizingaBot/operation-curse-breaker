
        };
        
        function generateCertificate() {
            const name = document.getElementById('customerName').value;
            const curseType = document.getElementById('curseType').value;
            const curseDesc = document.getElementById('curseDescription').value;
            
            if (!name || !curseType || !curseDesc) {
                alert('Please fill in all fields, child.');
                return;
            }
            
            // Update certificate
            document.getElementById('certName').textContent = name;
            document.getElementById('certCurseType').textContent = curseNames[curseType];
            document.getElementById('certCurseDesc').textContent = '"' + curseDesc + '"';
            
            // Pick random witch statement for this curse type
            const statements = witchStatements[curseType];
            const randomStatement = statements[Math.floor(Math.random() * statements.length)];
            document.getElementById('witchStatement').textContent = randomStatement;
            
            // Set date and ID
            const today = new Date();
            document.getElementById('certDate').textContent = today.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
            document.getElementById('certId').textContent = 'TSW-' + Math.random().toString(36).substr(2, 6).toUpperCase();
            
            // Show certificate
            document.getElementById('formSection').classList.add('hidden');
            document.getElementById('certificateSection').classList.remove('hidden');
            document.getElementById('downloadBtn').style.display = 'inline-block';
            
            // Scroll to certificate
            document.getElementById('certificateSection').scrollIntoView({ behavior: 'smooth' });
        }
        
        function downloadCertificate() {
            const certificate = document.getElementById('certificate');
            
            html2canvas(certificate, {
                scale: 2,
                backgroundColor: '#faf8f3'
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'curse-removal-certificate.png';
                link.href = canvas.toDataURL();
                link.click();
            });
        }
        
        function resetForm() {
            document.getElementById('formSection').classList.remove('hidden');
            document.getElementById('certificateSection').classList.add('hidden');
            document.getElementById('customerName').value = '';
            document.getElementById('curseType').value = '';
            document.getElementById('curseDescription').value = '';
            document.getElementById('formSection').scrollIntoView({ behavior: 'smooth' });
        }
    </script>
</body>
</html>