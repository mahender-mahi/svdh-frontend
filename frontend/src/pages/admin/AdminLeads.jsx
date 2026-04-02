// src/pages/admin/AdminLeads.jsx — Full leads table with CRUD
import { useState, useEffect, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import AdminLayout from '../../components/AdminLayout';
import { SourceBadge, StatusBadge } from './AdminDashboard';
import { getLeads, createLead, updateLead, deleteLead } from '../../utils/api';

const STATUSES = ['new','contacted','booked','completed','cancelled'];
const SOURCES  = ['chatbot','form','manual','google','referral'];
const SERVICES = ['Dental Cleaning','Root Canal','Teeth Whitening','Dental Implants','Cosmetic Dentistry','Orthodontics','Paediatric Dentistry','Oral Surgery','Other'];

export default function AdminLeads() {
  const [leads, setLeads]     = useState([]);
  const [total, setTotal]     = useState(0);
  const [page, setPage]       = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch]     = useState('');
  const [srcFilter, setSrc]     = useState('all');
  const [statusFilter, setStat] = useState('all');

  // Modals
  const [viewLead, setViewLead]     = useState(null);
  const [editLead, setEditLead]     = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [showCreate, setShowCreate] = useState(false);

  const PER_PAGE = 10;

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getLeads({ page, limit: PER_PAGE, search: search||undefined, source: srcFilter, status: statusFilter });
      setLeads(res.data.data);
      setTotal(res.data.pagination.total);
      setTotalPages(res.data.pagination.totalPages);
    } catch { toast.error('Failed to load leads.'); }
    finally { setLoading(false); }
  }, [page, search, srcFilter, statusFilter]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  const handleDelete = async () => {
    try { await deleteLead(deletingId); toast.success('Lead deleted.'); setDeletingId(null); fetchLeads(); }
    catch { toast.error('Could not delete lead.'); }
  };

  const handleStatusChange = async (id, status) => {
    try { await updateLead(id, { status }); toast.success('Status updated.'); fetchLeads(); }
    catch { toast.error('Update failed.'); }
  };

  return (
    <AdminLayout title="Leads Management">
      {/* Toolbar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginBottom: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
          <input value={search} onChange={e=>{setSearch(e.target.value);setPage(1);}} placeholder="🔍 Search name, phone, email..." style={filterStyle} />
          <select value={srcFilter} onChange={e=>{setSrc(e.target.value);setPage(1);}} style={filterStyle}>
            <option value="all">All Sources</option>
            {SOURCES.map(s=><option key={s} value={s}>{s}</option>)}
          </select>
          <select value={statusFilter} onChange={e=>{setStat(e.target.value);setPage(1);}} style={filterStyle}>
            <option value="all">All Statuses</option>
            {STATUSES.map(s=><option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <button onClick={()=>setShowCreate(true)} style={{ padding: '0.55rem 1.2rem', background: '#90EE90', color: '#3a8a3a', fontWeight: 700, fontSize: '0.85rem', border: 'none', borderRadius: 20, cursor: 'pointer', fontFamily: 'Nunito,sans-serif' }}>
          ➕ Add Lead
        </button>
      </div>

      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #e8f4e8', overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.05rem', color: '#1a2e1a', margin: 0 }}>
            All Leads {loading ? '...' : `(${total})`}
          </h3>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.83rem' }}>
            <thead>
              <tr style={{ background: '#f8faf8' }}>
                {['#','Name','Phone','Email','Service','Source','Status','Date','Actions'].map(h=>(
                  <th key={h} style={{ textAlign: 'left', padding: '0.7rem 0.8rem', color: '#6b8a6b', fontWeight: 700, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: 0.5, borderBottom: '2px solid #f0f0f0', whiteSpace: 'nowrap' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={9} style={{ textAlign: 'center', padding: '3rem', color: '#6b8a6b' }}>Loading leads...</td></tr>
              ) : leads.length === 0 ? (
                <tr><td colSpan={9} style={{ textAlign: 'center', padding: '3rem', color: '#6b8a6b' }}>No leads found. Try adjusting the filters.</td></tr>
              ) : leads.map(l => (
                <tr key={l.id} style={{ borderBottom: '1px solid #f8f8f8' }} onMouseEnter={e=>e.currentTarget.style.background='#f8fff8'} onMouseLeave={e=>e.currentTarget.style.background='#fff'}>
                  <td style={{ padding: '0.75rem 0.8rem', color: '#6b8a6b', fontSize: '0.72rem' }}>#{l.id}</td>
                  <td style={{ padding: '0.75rem 0.8rem', fontWeight: 600, color: '#1a2e1a', whiteSpace: 'nowrap' }}>{l.name}</td>
                  <td style={{ padding: '0.75rem 0.8rem', whiteSpace: 'nowrap' }}>{l.phone}</td>
                  <td style={{ padding: '0.75rem 0.8rem', color: '#3a5a3a', maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{l.email||'—'}</td>
                  <td style={{ padding: '0.75rem 0.8rem', color: '#3a5a3a', whiteSpace: 'nowrap' }}>{l.service||'—'}</td>
                  <td style={{ padding: '0.75rem 0.8rem' }}><SourceBadge src={l.source}/></td>
                  <td style={{ padding: '0.75rem 0.8rem' }}>
                    <select value={l.status} onChange={e=>handleStatusChange(l.id,e.target.value)}
                      style={{ border: '1px solid #d0e8d0', borderRadius: 6, padding: '0.2rem 0.4rem', fontSize: '0.75rem', fontFamily: 'Nunito,sans-serif', cursor: 'pointer', background: '#fff', color: '#1a2e1a' }}>
                      {STATUSES.map(s=><option key={s} value={s}>{s}</option>)}
                    </select>
                  </td>
                  <td style={{ padding: '0.75rem 0.8rem', fontSize: '0.72rem', color: '#6b8a6b', whiteSpace: 'nowrap' }}>{new Date(l.created_at).toLocaleDateString('en-IN')}</td>
                  <td style={{ padding: '0.75rem 0.8rem' }}>
                    <div style={{ display: 'flex', gap: 4 }}>
                      <ActionBtn color="#e8f8ff" text="#2a7aad" onClick={()=>setViewLead(l)}>View</ActionBtn>
                      <ActionBtn color="#f0fff0" text="#3a8a3a" onClick={()=>setEditLead({...l})}>Edit</ActionBtn>
                      <ActionBtn color="#fee8e8" text="#c0392b" onClick={()=>setDeletingId(l.id)}>Del</ActionBtn>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div style={{ display: 'flex', gap: 6, justifyContent: 'center', padding: '1rem', borderTop: '1px solid #f0f0f0' }}>
            <PageBtn onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>‹</PageBtn>
            {Array.from({length:Math.min(totalPages,7)},(_,i)=>{
              const p = totalPages<=7 ? i+1 : page<=4 ? i+1 : page>=totalPages-3 ? totalPages-6+i : page-3+i;
              return <PageBtn key={p} onClick={()=>setPage(p)} active={page===p}>{p}</PageBtn>;
            })}
            <PageBtn onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages}>›</PageBtn>
          </div>
        )}
      </div>

      {/* MODALS */}
      {viewLead && <ViewModal lead={viewLead} onClose={()=>setViewLead(null)} />}
      {editLead && <EditModal lead={editLead} onClose={()=>setEditLead(null)} onSave={()=>{setEditLead(null);fetchLeads();}} />}
      {deletingId && (
        <Modal onClose={()=>setDeletingId(null)}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗑️</div>
            <h3 style={{ fontFamily: "'Playfair Display',serif", color: '#c0392b', marginBottom: '0.7rem' }}>Delete Lead?</h3>
            <p style={{ color: '#3a5a3a', fontSize: '0.88rem', marginBottom: '1.5rem' }}>This action cannot be undone.</p>
            <div style={{ display: 'flex', gap: '0.7rem', justifyContent: 'center' }}>
              <button onClick={()=>setDeletingId(null)} style={secondaryBtn}>Cancel</button>
              <button onClick={handleDelete} style={{ ...secondaryBtn, background: '#fee8e8', color: '#c0392b', borderColor: '#f9c0c0' }}>Delete</button>
            </div>
          </div>
        </Modal>
      )}
      {showCreate && <CreateModal onClose={()=>setShowCreate(false)} onSave={()=>{setShowCreate(false);fetchLeads();}} />}
    </AdminLayout>
  );
}

function ViewModal({ lead, onClose }) {
  const fields = [['Name',lead.name],['Phone',lead.phone],['Email',lead.email||'—'],['Service',lead.service||'—'],['Message',lead.message||'—'],['Source',lead.source],['Status',lead.status],['Notes',lead.notes||'—'],['Date',new Date(lead.created_at).toLocaleString('en-IN')]];
  return (
    <Modal onClose={onClose}>
      <h3 style={mh3}>Lead Details — {lead.name}</h3>
      {fields.map(([k,v])=>(
        <div key={k} style={{ display:'flex', gap:'1rem', padding:'0.55rem 0', borderBottom:'1px solid #f0f0f0', fontSize:'0.87rem' }}>
          <span style={{ width:80, color:'#6b8a6b', fontWeight:700, flexShrink:0 }}>{k}</span>
          <span style={{ color:'#1a2e1a', wordBreak:'break-word' }}>{v}</span>
        </div>
      ))}
      <div style={{ marginTop:'1.5rem', textAlign:'right' }}>
        <button onClick={onClose} style={primaryBtn}>Close</button>
      </div>
    </Modal>
  );
}

function EditModal({ lead, onClose, onSave }) {
  const { register, handleSubmit, formState:{errors,isSubmitting} } = useForm({ defaultValues: lead });
  const onSubmit = async (data) => {
    try { await updateLead(lead.id, data); toast.success('Lead updated.'); onSave(); }
    catch { toast.error('Update failed.'); }
  };
  return (
    <Modal onClose={onClose}>
      <h3 style={mh3}>Edit Lead</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          <div style={fg}><label style={lbl}>Name</label><input {...register('name',{required:true})} style={inp}/></div>
          <div style={fg}><label style={lbl}>Phone</label><input {...register('phone',{required:true})} style={inp}/></div>
        </div>
        <div style={fg}><label style={lbl}>Email</label><input {...register('email')} type="email" style={inp}/></div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          <div style={fg}>
            <label style={lbl}>Service</label>
            <select {...register('service')} style={inp}><option value="">—</option>{SERVICES.map(s=><option key={s}>{s}</option>)}</select>
          </div>
          <div style={fg}>
            <label style={lbl}>Status</label>
            <select {...register('status')} style={inp}>{STATUSES.map(s=><option key={s}>{s}</option>)}</select>
          </div>
        </div>
        <div style={fg}><label style={lbl}>Notes (internal)</label><textarea {...register('notes')} rows={3} style={{...inp,resize:'vertical'}}/></div>
        <div style={{display:'flex',gap:'0.7rem',justifyContent:'flex-end',marginTop:'1.2rem'}}>
          <button type="button" onClick={onClose} style={secondaryBtn}>Cancel</button>
          <button type="submit" disabled={isSubmitting} style={primaryBtn}>{isSubmitting?'Saving...':'💾 Save Changes'}</button>
        </div>
      </form>
    </Modal>
  );
}

function CreateModal({ onClose, onSave }) {
  const { register, handleSubmit, formState:{isSubmitting} } = useForm();
  const onSubmit = async (data) => {
    try { await createLead({...data,source:'manual'}); toast.success('Lead created!'); onSave(); }
    catch { toast.error('Failed to create lead.'); }
  };
  return (
    <Modal onClose={onClose}>
      <h3 style={mh3}>➕ Create Lead Manually</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
          <div style={fg}><label style={lbl}>Name *</label><input required {...register('name')} placeholder="Patient name" style={inp}/></div>
          <div style={fg}><label style={lbl}>Phone *</label><input required {...register('phone')} placeholder="10-digit mobile" style={inp}/></div>
        </div>
        <div style={fg}><label style={lbl}>Email</label><input {...register('email')} type="email" placeholder="optional" style={inp}/></div>
        <div style={fg}>
          <label style={lbl}>Service</label>
          <select {...register('service')} style={inp}><option value="">Select service</option>{SERVICES.map(s=><option key={s}>{s}</option>)}</select>
        </div>
        <div style={fg}><label style={lbl}>Message / Notes</label><textarea {...register('message')} rows={3} placeholder="Patient concern or notes..." style={{...inp,resize:'vertical'}}/></div>
        <div style={{display:'flex',gap:'0.7rem',justifyContent:'flex-end',marginTop:'1.2rem'}}>
          <button type="button" onClick={onClose} style={secondaryBtn}>Cancel</button>
          <button type="submit" disabled={isSubmitting} style={primaryBtn}>{isSubmitting?'Creating...':'➕ Create Lead'}</button>
        </div>
      </form>
    </Modal>
  );
}

function Modal({ children, onClose }) {
  return (
    <div onClick={onClose} style={{ position:'fixed',inset:0,background:'rgba(0,0,0,0.45)',zIndex:300,display:'flex',alignItems:'center',justifyContent:'center',padding:'1rem' }}>
      <div onClick={e=>e.stopPropagation()} style={{ background:'#fff',borderRadius:20,padding:'2rem',maxWidth:520,width:'100%',maxHeight:'90vh',overflowY:'auto',boxShadow:'0 16px 60px rgba(0,0,0,0.2)' }}>
        {children}
      </div>
    </div>
  );
}

function ActionBtn({ children, color, text, onClick }) {
  return <button onClick={onClick} style={{ padding:'0.28rem 0.65rem',borderRadius:6,border:'none',cursor:'pointer',fontSize:'0.75rem',fontWeight:600,fontFamily:'Nunito,sans-serif',background:color,color:text }}>{children}</button>;
}
function PageBtn({ children, onClick, active, disabled }) {
  return <button onClick={onClick} disabled={disabled} style={{ width:32,height:32,borderRadius:6,border:`1px solid ${active?'#90EE90':'#d0e8d0'}`,background:active?'#90EE90':'#fff',color:active?'#3a8a3a':'#3a5a3a',fontWeight:600,fontSize:'0.82rem',cursor:disabled?'not-allowed':'pointer',fontFamily:'Nunito,sans-serif',opacity:disabled?0.5:1 }}>{children}</button>;
}

const filterStyle = { border:'1.5px solid #d0e8d0',borderRadius:20,padding:'0.45rem 1rem',fontSize:'0.83rem',fontFamily:'Nunito,sans-serif',outline:'none',minWidth:160,color:'#1a2e1a' };
const fg = { marginBottom:'1rem' };
const lbl = { display:'block',fontWeight:700,fontSize:'0.8rem',color:'#1a2e1a',marginBottom:'0.3rem' };
const inp = { width:'100%',border:'1.5px solid #d0e8d0',borderRadius:8,padding:'0.6rem 0.9rem',fontFamily:'Nunito,sans-serif',fontSize:'0.88rem',color:'#1a2e1a',outline:'none',boxSizing:'border-box',background:'#fff' };
const mh3 = { fontFamily:"'Playfair Display',serif",fontSize:'1.2rem',color:'#2a7aad',marginBottom:'1.3rem' };
const primaryBtn = { padding:'0.55rem 1.3rem',background:'#90EE90',color:'#3a8a3a',fontWeight:700,border:'none',borderRadius:20,cursor:'pointer',fontFamily:'Nunito,sans-serif',fontSize:'0.88rem' };
const secondaryBtn = { padding:'0.55rem 1.3rem',background:'#fff',color:'#3a5a3a',fontWeight:600,border:'1.5px solid #d0e8d0',borderRadius:20,cursor:'pointer',fontFamily:'Nunito,sans-serif',fontSize:'0.88rem' };
